/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#2849b9",
        lightBlue: "#6980ce",
        deepBlue: "#4066c4",
        dabyBlue: "#a2d8f2",
        dark: "#202b30",
        darkGray: "#314149",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
