/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        primary: {
          DEFAULT: "#FEF7F4",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FEF7F4",
          600: "#F9D2C1",
          700: "#F5AC8D",
          800: "#F0875A",
          900: "#EB6126",
        },
      },
      fontFamily: {
        quita: ["quita", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
