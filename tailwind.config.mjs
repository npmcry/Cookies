/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crumbl: ["var(--font-montserrat)", "sans-serif"],  // Matches "crumbl"
        cookies: ["var(--font-poppins)", "sans-serif"],   // Matches "cookies"
      },
    },
  },
  plugins: [],
};
