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
    <mj-title>Estimate Request Confirmation</mj-title>
    <mj-attributes>
      <mj-all font-family="Arial, sans-serif" />
      <mj-text color="#333333" font-size="16px" line-height="1.5" />
      <mj-section padding="0px" />
      <mj-button background-color="#445B9F" color="#ffffff" font-size="16px" border-radius="5px" padding="15px" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#f4f4f4">
    <!-- Header Section -->
    <mj-section background-color="#fff" padding="20px">
      <mj-column>
        <mj-image src="https://moorhousecoating.com/assets/images/moorhouse-logo.png" alt="Logo" width="200px" />
        <mj-text align="center" color="#445B9F" font-size="24px" font-weight="bold" padding-top="10px">
          Estimate Request Confirmation
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Introduction Section -->
    <mj-section background-color="#ffffff" padding="20px">
      <mj-column>
        <mj-text>
          <h2 style="margin-bottom: 10px; color: #445B9F;">Thank You, ${input.estimate_first_name}!</h2>
          <p>We appreciate your interest in MoorHouse Coating. Here’s a summary of your estimate request:</p>
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Contact Details Section -->
    <mj-section background-color="#f9f9f9" padding="20px">
      <mj-column>
        <mj-text>
          <p><strong>Contact Information:</strong></p>
          <p>Email: <a href="mailto:${input.estimate_email}" style="color: #445B9F; text-decoration: none;">${input.estimate_email}</a></p>
          <p>Phone: ${input.estimate_phone}</p>
          <p><strong>Address:</strong></p>
          <p>${input.estimate_street}<br>${input.estimate_city}, ${input.estimate_state} ${input.estimate_zip}</p>
          <p><strong>Project Type:</strong> ${input.estimate_project_type}</p>
          ${
            input.estimate_comments
              ? `<p><strong>Comments:</strong> ${input.estimate_comments}</p>`
              : ""
          }
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Footer Message -->
    <mj-section background-color="#ffffff" padding="20px">
      <mj-column>
        <mj-text align="center">
          <p>Our team is reviewing your request and will get back to you soon.</p>
          <p>If you have any questions, feel free to <a href="mailto:info@moorhousecoating.com" style="color: #445B9F; text-decoration: none;">contact us</a>.</p>
        </mj-text>
        <mj-button href="https://moorhousecoating.com" padding="20px">
          Visit Our Website
        </mj-button>
      </mj-column>
    </mj-section>

    <!-- Footer Section -->
    <mj-section background-color="#333333" padding="10px">
      <mj-column>
        <mj-text align="center" color="#ffffff" font-size="14px">
          © ${new Date().getFullYear()} MoorHouse Coating. All rights reserved.
        </mj-text>
        <mj-text align="center" color="#ffffff" font-size="14px">
          <a href="#" style="color: #ffffff; text-decoration: underline;">Privacy Policy</a> | <a href="#" style="color: #ffffff; text-decoration: underline;">Terms of Service</a>
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
