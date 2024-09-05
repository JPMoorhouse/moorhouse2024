export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const RETOOL_URL = import.meta.env.RETOOL_URL;
  const RETOOL_API_KEY = import.meta.env.RETOOL_API_KEY;

  const requestPayload = await request.formData();
  const requiredFields = [
    "estimate_first_name",
    "estimate_last_name",
    "estimate_phone",
    "estimate_email",
    "estimate_street",
    "estimate_city",
    "estimate_state",
    "estimate_zip",
    "estimate_project_type"
  ];

  const formData: Record<string, string> = {};
  for (const field of requiredFields) {
    const value = requestPayload.get(field);
    if (!value) {
      return new Response(
        JSON.stringify({ message: `Please provide your ${field.replace(/estimate_/g, '').replace(/_/g, ' ')}` }),
        { status: 400 }
      );
    }
    formData[field] = value.toString();
  }

  // Optional field
  formData.estimate_comments = requestPayload.get('estimate_comments')?.toString() || '';

  try {
    const retoolResponse = await fetch(RETOOL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Workflow-Api-Key': RETOOL_API_KEY
      },
      body: JSON.stringify(formData)
    });

    if (!retoolResponse.ok) {
      throw new Error(`Retool API responded with status: ${retoolResponse.status}`);
    }

    return redirect('/thank-you');
  } catch (error) {
    console.error("Error processing quote request:", error);
    return new Response(
      JSON.stringify({ message: "An error occurred while processing your request. Please try again later." }),
      { status: 500 }
    );
  }
};