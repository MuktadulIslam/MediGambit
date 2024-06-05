/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "400px",
      md: "560px",
      pc: "1000px",
      "max-sm": { max: "399px" },
      "max-md": { max: "559px" },
      "zero-sm": { min: "0px", max: "399px" },
      "sm-md": { min: "400px", max: "559px" },
    },
    extend: {
    },
  },
  plugins: [],
};
