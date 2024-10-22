/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white1: "#f8f9fd",
        primary: "#ded9d9",
        secondary: "#e65b05",
        tertiary: "#012957",
        quaternary: "#e0e5e9",
        orange: "#e65b05d5",
      },
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        otamanopee: ["Otamanopee", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
