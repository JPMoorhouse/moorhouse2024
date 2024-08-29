import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const requiredFields = [
      "firstName",
      "lastName",
      "phoneNumber",
      "emailAddress",
      "address",
      "city",
      "state",
      "zipcode",
      "propertyType"
    ];
    for (var pair of data.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }

    const formData: Record<string, string> = {};
    
    for (const field of requiredFields) {
      const value = data.get(field);
      if (!value) {
        return new Response(
          JSON.stringify({ message: `Please provide your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}` }),
          { status: 400 }
        );
      }
      formData[field] = value.toString();
    }

    // Optional field
    formData.comments = data.get('comments')?.toString() || '';


    // Process the data here
    // For example, you could send it to a database or external API

    return new Response(
      JSON.stringify({ message: "Form submitted successfully", data: formData }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return new Response(
      JSON.stringify({ message: "An error occurred while processing the form" }),
      { status: 500 }
    );
  }
};