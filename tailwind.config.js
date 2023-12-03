/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        form: " rgb(38, 57, 77) 5px 30px 35px -5px;",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
  },
  plugins: [],
};
