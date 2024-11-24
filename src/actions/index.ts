import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import * as postmark from "postmark";
import mjml2html from "mjml";

export const server = {
  quoteForm: defineAction({
    input: z.object({
      fullName: z.string().min(1, { message: "Please enter your full name" }),
      email: z
        .string()
        .min(1, { message: "Please enter an email address" })
        .email({ message: "Please enter a valid email address" }),
      phone: z.string().min(1, { message: "Please enter a phone" }),
      fullMessage: z.string().min(1, { message: "Please enter a message" }),
      cfTurnstileResponse: z
        .string()
        .min(1, { message: "Turnstile verification required" }),
    }),
    handler: async (input) => {
      const formData = new FormData();
      formData.append("secret", import.meta.env.TURNSTILE_SECRET_TOKEN);
      formData.append("response", input.cfTurnstileResponse as string);
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

      const client = new postmark.ServerClient(import.meta.env.POSTMARK_TOKEN);
      const { html: emailBody } = mjml2html(`
        <mjml>
          <mj-head>
            <mj-title>Healing at the Well</mj-title>
            <mj-font name="Arial" href="https://fonts.googleapis.com/css?family=Arial" />
            <mj-attributes>
              <mj-all font-family="Arial, sans-serif" />
            </mj-attributes>
          </mj-head>
          <mj-body background-color="#f4f4f4">
            <mj-section background-color="#ffffff" padding-bottom="0px">
              <mj-column>
                <mj-image src="https://healingatthewell.org/logo.png" alt="Healing at the Well" align="center" width="200px" />
              </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff">
              <mj-column>
                <mj-text>
                  <h2>Hi ${input.fullName},</h2>
                  <p>Thank you for reaching out to Healing at the Well.</p>
                  <p>Please see the details below for your records.</p>
                </mj-text>
              </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff">
              <mj-column width="60%">
              </mj-column>
            </mj-section>

            <mj-section background-color="#ffffff">
              <mj-column>
                <mj-text>
                  <p>From: ${input.email}</p>
                  <p>Phone: ${input.phone}</p>
                  <p>Message:</p>
                  <p>${input.fullMessage}</p>
                </mj-text>
              </mj-column>
            </mj-section>
          </mj-body>
        </mjml>
        `);
      try {
        await client.sendEmail({
          From: "Healing at the Well <nicole@healingatthewell.org>",
          To: `${input.email}`,
          Cc: "nicole@healingatthewell.org",
          Subject: "Thank you for contacting Healing at the Well",
          HtmlBody: emailBody,
          MessageStream: "outbound",
        });
      } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
          JSON.stringify({
            status: "500 Internal Server Error",
            message: "An error occurred while sending the email.",
          }),
          { status: 500 }
        );
      }
      return {
        status: 200,
        message: "Success",
      };
    },
  }),
};
