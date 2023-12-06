/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        form: " rgb(38, 57, 77) 5px 30px 35px -5px;",
        "form-sm": " rgb(38, 57, 77) 5px 20px 20px -10px;",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
    colors: {
      primary: "#000",
      secondary: "#fff",
      tertiary: "rgb(24 24 27)",
      "tertiary-text": " rgb(156 163 175)",
      "light-bg": "#f0f0f0",
      accent: "#fde047",
    },
  },
  plugins: [],
};
