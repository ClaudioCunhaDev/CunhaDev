/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        corPrincipal: "#2D2E32",
        corSecundaria: "#46535E",
        corFundo1: "#F9F9F9",
        corFundo2: "#FFFFFF",
        title: "#2d2e32",
      },
    },
  },
  plugins: [],
};
