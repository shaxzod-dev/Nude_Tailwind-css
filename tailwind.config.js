/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Playfair Display"],
      roboto: ["Roboto"],
    },
    colors: {
      pink: "rgb(253, 247, 240)",
      primary: "rgb(55, 79, 76)",
      "title-color": "rgb(62, 62, 66)",
    },
    screens: {
      phone: "320px",
      "x-phone": "370px",
      "2x-phone": "400px",
      "3x-phone": "450px",
      "4x-phone": "500px",
      "5x-phone": "650px",
      md: "768px",
      "semi-md": "824px",
      "semi-lg": "900px",
      lg: "1000px",
    },
  },
  plugins: [],
};
