import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import sgMail from "@sendgrid/mail";
import mjml2html from "mjml";

export const server = {
  quoteForm: defineAction({
    input: z.object({
      estimate_first_name: z
        .string()
        .min(1, { message: "First name is required" }),
      estimate_last_name: z
        .string()
        .min(1, { message: "Last name is required" }),
      estimate_email: z
        .string()
        .email({ message: "Please enter a valid email address" })
        .min(1, { message: "Email address is required" }),
      estimate_phone: z
        .string()
        .min(1, { message: "Phone number is required" }),
      estimate_street: z
        .string()
        .min(1, { message: "Street address is required" }),
      estimate_city: z.string().min(1, { message: "City is required" }),
      estimate_state: z.string().min(1, { message: "State is required" }),
      estimate_zip: z.string().min(1, { message: "Postal code is required" }),
      estimate_comments: z.string().optional(),
      estimate_project_type: z
        .string()
        .min(1, { message: "Project type is required" }),
      cfTurnstileResponse: z
        .string()
        .min(1, { message: "Turnstile verification required" }),
    }),
    handler: async (input) => {
      // Validate Turnstile response
      const formData = new FormData();
      formData.append("secret", import.meta.env.TURNSTILE_SECRET_TOKEN);
      formData.append("response", input.cfTurnstileResponse);
      const result = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          body: formData,
        }
      );

      const turnstileCheck = await result.json();

      if (!turnstileCheck.success) {
        return {
          success: false,
          message: "Turnstile verification failed. Please try again.",
        };
      }

      // Prepare email content
      sgMail.setApiKey(import.meta.env.SENDGRID_TOKEN);
      const { html: emailBody } = mjml2html(`
        <mjml>
          <mj-head>
            <mj-title>Estimate Request</mj-title>
            <mj-attributes>
              <mj-all font-family="Arial, sans-serif" />
            </mj-attributes>
          </mj-head>
          <mj-body background-color="#f4f4f4">
            <mj-section background-color="#ffffff" padding-bottom="0px">
              <mj-column>
                <mj-image src="https://healingatthewell.org/logo.png" alt="Logo" align="center" width="200px" />
              </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff">
              <mj-column>
                <mj-text>
                  <h2>Thank you for your estimate request, ${input.estimate_first_name} ${input.estimate_last_name}.</h2>
                  <p>Below are the details you provided:</p>
                </mj-text>
              </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff">
              <mj-column>
                <mj-text>
                  <p><strong>Contact Information:</strong></p>
                  <p>Email: ${input.estimate_email}</p>
                  <p>Phone: ${input.estimate_phone}</p>
                  <p><strong>Address:</strong></p>
                  <p>${input.estimate_street}, ${input.estimate_city}, ${input.estimate_state}, ${input.estimate_zip}</p>
                  <p><strong>Project Type:</strong> ${input.estimate_project_type}</p>
                  ${
                    input.estimate_comments
                      ? `<p><strong>Comments:</strong> ${input.estimate_comments}</p>`
                      : ""
                  }
                </mj-text>
              </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff">
              <mj-column>
                <mj-text>
                  <p>We will review your request and get back to you shortly.</p>
                  <p>Thank you,</p>
                  <p>The Healing at the Well Team</p>
                </mj-text>
              </mj-column>
            </mj-section>
          </mj-body>
        </mjml>
      `);

      // Send email
      try {
        // Send email via SendGrid
        const adminMsg = {
          to: "info@moorhousecoating.com",
          from: "website@moorhousecoating.com",
          subject: "We Have New Form Submission On Website",
          html: emailBody,
        };
        await sgMail.send(adminMsg);
      } catch (error) {
        return {
          success: false,
          message: "An error occurred while sending the email.",
        };
      }

      return {
        status: 200,
        message: "Estimate request submitted successfully.",
      };
    },
  }),
};
