/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ded9d9",
        seconday: "#e65b05",
        tertiary: "#012957",
        quaternary: "#e0e5e9",
      },
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        otamanopee: ["Otamanopee", "sans-serif"],
      },
    },
  },
  plugins: [],
};
