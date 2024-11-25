<script lang="ts">
  import { turnstile } from "@svelte-put/cloudflare-turnstile";
  import { actions, isInputError } from "astro:actions";
  const TURNSTILE_SITE_KEY = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;

  interface FormErrors {
    estimate_first_name?: string | string[];
    estimate_last_name?: string | string[];
    estimate_phone?: string | string[];
    estimate_email?: string | string[];
    estimate_street?: string | string[];
    estimate_city?: string | string[];
    estimate_state?: string | string[];
    estimate_zip?: string | string[];
    estimate_comments?: string | string[];
    estimate_project_type?: string | string[];
    cfTurnstileResponse?: string | string[];
  }

  const form = $state({
    estimate_first_name: "",
    estimate_last_name: "",
    estimate_phone: "",
    estimate_email: "",
    estimate_street: "",
    estimate_city: "",
    estimate_state: "",
    estimate_zip: "",
    estimate_comments: "",
    estimate_project_type: "",
    cfTurnstileResponse: "",
    errors: {} as FormErrors,
  });
  let isLoading = $state(false);

  async function handleSubmit(event: Event) {
    event.preventDefault();
    isLoading = true;
    const result = await actions.quoteForm(form);
    if (isInputError(result.error)) {
      form.errors = result.error.fields;
    }
    if (result.data?.status === 200) {
      location.href = "/thank-you";
    }
    isLoading = false;
  }
</script>

<form method="POST" onsubmit={handleSubmit}>
  <div
    class="flex justify-center items-center md:flex-row w-full flex-col gap-4 mb-8"
  >
    <div class="flex-1 flex justify-start items-start flex-col w-full gap-2">
      <label for="estimate_first_name" class="text-white">First Name*</label>
      <input
        id="estimate_first_name"
        name="estimate_first_name"
        type="text"
        placeholder="Enter first name"
        bind:value={form.estimate_first_name}
        class="rounded-xl w-full h-14 px-4 outline-none text-white border-white border bg-transparent placeholder:text-white/60"
      />
      {#if form.errors?.estimate_first_name}
        <p class="text-red-800">{form.errors.estimate_first_name}</p>
      {/if}
    </div>
    <div class="flex-1 flex justify-start items-start flex-col w-full gap-2">
      <label for="estimate_last_name" class="text-white">Last Name*</label>
      <input
        id="estimate_last_name"
        name="estimate_last_name"
        type="text"
        placeholder="Enter last name"
        bind:value={form.estimate_last_name}
        class="rounded-xl w-full h-14 px-4 outline-none text-white border-white border bg-transparent placeholder:text-white/60"
      />
      {#if form.errors?.estimate_last_name}
        <p class="text-red-800">{form.errors.estimate_last_name}</p>
      {/if}
    </div>
  </div>

  <div
    class="flex justify-center items-center md:flex-row w-full flex-col gap-4 mb-8"
  >
    <div class="flex-1 flex justify-start items-start flex-col w-full gap-2">
      <label for="estimate_phone" class="text-white">Phone Number*</label>
      <input
        id="estimate_phone"
        name="estimate_phone"
        type="tel"
        placeholder="Enter phone number"
        bind:value={form.estimate_phone}
        class="rounded-xl w-full h-14 px-4 outline-none text-white border-white border bg-transparent placeholder:text-white/60"
      />
      {#if form.errors?.estimate_phone}
        <p class="text-red-800">{form.errors.estimate_phone}</p>
      {/if}
    </div>
    <div class="flex-1 flex justify-start items-start flex-col w-full gap-2">
      <label for="estimate_email" class="text-white">Email Address*</label>
      <input
        id="estimate_email"
        name="estimate_email"
        type="email"
        placeholder="Enter email address"
        bind:value={form.estimate_email}
        class="rounded-xl w-full h-14 px-4 outline-none text-white border-white border bg-transparent placeholder:text-white/60"
      />
      {#if form.errors?.estimate_email}
        <p class="text-red-800">{form.errors.estimate_email}</p>
      {/if}
    </div>
  </div>

  <div class="flex-1 flex justify-start items-start flex-col w-full gap-2">
    <label for="estimate_street" class="text-white">Street Address*</label>
    <input
      id="estimate_street"
      name="estimate_street"
      type="text"
      placeholder="Enter street address"
      bind:value={form.estimate_street}
      class="rounded-xl w-full h-14 px-4 outline-none text-white border-white border bg-transparent placeholder:text-white/60"
    />
    {#if form.errors?.estimate_street}
      <p class="text-red-800">{form.errors.estimate_street}</p>
    {/if}
  </div>

  <div
    class="flex justify-center items-center gap-4 md:flex-row w-full flex-col mt-8"
  >
    <div class="flex-1 flex justify-start items-start flex-col w-full gap-2">
      <label for="estimate_city" class="text-white">City*</label>
      <input
        id="estimate_city"
        name="estimate_city"
        type="text"
        placeholder="Enter city"
        bind:value={form.estimate_city}
        class="rounded-xl w-full h-14 px-4 outline-none text-white border-white border bg-transparent placeholder:text-white/60"
      />
      {#if form.errors?.estimate_city}
        <p class="text-red-800">{form.errors.estimate_city}</p>
      {/if}
    </div>
    <div class="flex-1 flex justify-center items-center gap-2">
      <div class="flex-1 justify-start items-start flex-col gap-2">
        <label for="estimate_state" class="text-white">State*</label>
        <select
          id="estimate_state"
          name="estimate_state"
          bind:value={form.estimate_state}
          class="rounded-xl mt-2 w-full h-14 px-4 border-white outline-none text-white border bg-transparent placeholder:text-white/60"
        >
          <option value="" disabled selected>Select state</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        {#if form.errors?.estimate_state}
          <p class="text-red-800">{form.errors.estimate_state}</p>
        {/if}
      </div>
      <div class="flex-1 flex justify-start items-start flex-col gap-2">
        <label for="estimate_zip" class="text-white">Postal Code*</label>
        <input
          id="estimate_zip"
          name="estimate_zip"
          type="text"
          placeholder="Enter zip code"
          bind:value={form.estimate_zip}
          class="rounded-xl w-full h-14 px-4 outline-none text-white border-white border bg-transparent placeholder:text-white/60"
        />
        {#if form.errors?.estimate_zip}
          <p class="text-red-800">{form.errors.estimate_zip}</p>
        {/if}
      </div>
    </div>
  </div>

  <div
    class="flex justify-center items-center gap-4 md:flex-row w-full flex-col my-8"
  >
    <div class="flex flex-1 justify-start items-start w-full flex-col gap-2">
      <label for="estimate_comments" class="text-white">Other Comments</label>
      <input
        id="estimate_comments"
        name="estimate_comments"
        placeholder="Any additional helpful details"
        bind:value={form.estimate_comments}
        class="rounded-xl w-full h-14 px-4 py-2 border-white outline-none text-white border bg-transparent placeholder:text-white/60 resize-none"
      />
      {#if form.errors?.estimate_comments}
        <p class="text-red-800">{form.errors.estimate_comments}</p>
      {/if}
    </div>
    <div
      class="md:max-w-[13rem] w-full flex justify-start items-start flex-col gap-2"
    >
      <label id="estimate_project_type" class="text-white">Property Type*</label
      >
      <select
        id="estimate_project_type"
        name="estimate_project_type"
        bind:value={form.estimate_project_type}
        class="rounded-xl w-full h-14 px-4 border-white outline-none text-white border bg-transparent placeholder:text-white/60"
      >
        <option value="" disabled selected>Project Type</option>
        <option value="Residential Exterior">Residential Exterior</option>
        <option value="Residential Interior">Residential Interior</option>
        <!-- Add remaining options -->
      </select>
      {#if form.errors?.estimate_project_type}
        <p class="text-red-800">{form.errors.estimate_project_type}</p>
      {/if}
    </div>
  </div>
  <div
    use:turnstile
    turnstile-sitekey={TURNSTILE_SITE_KEY}
    turnstile-theme="light"
    turnstile-size="normal"
    turnstile-language="en"
    turnstile-response-field-name="turnstile"
    turnstile-response-field
    onturnstile={(e) => (form.cfTurnstileResponse = e.detail.token)}
  ></div>
  {#if form.errors?.cfTurnstileResponse}<p class="text-red-800">
      {form.errors.cfTurnstileResponse}
    </p>{/if}
  <button
    type="submit"
    disabled={isLoading}
    class="bg-secondary w-full rounded-xl h-14 mt-12 text-[#333] font-bold text-lg disabled:opacity-50 flex justify-center items-center gap-4"
  >
    {#if isLoading}
      Submitting...
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-auto"
        viewBox="0 0 300 150"
        ><path
          fill="none"
          stroke="#FFFFFF"
          stroke-width="15"
          stroke-linecap="round"
          stroke-dasharray="300 385"
          stroke-dashoffset="0"
          d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          ><animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="2"
            values="685;-685"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animate></path
        ></svg
      >
    {:else}
      Get My FREE Estimate!
    {/if}
  </button>
</form>
