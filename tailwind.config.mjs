/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#28709F",
        secondary: "#EDC81A",
        yellow: "#EDC81A",
        black: "#232323",
        helper: "#047291",
        green: "#65B448",
        purple: "#223F8D",
        
      },
      fontFamily: {
        body: ["Prompt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
