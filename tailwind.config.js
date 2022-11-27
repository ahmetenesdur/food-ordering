/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        danger: "#ff073a",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
    },
    plugins: [],
  },
};