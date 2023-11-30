/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        black: "#1B2021",
        orange: "#F58634",
        light: "#676767",
      },
    },
  },
  plugins: [],
};
