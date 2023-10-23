/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "Lora, serif",
        body: "Merriweather Sans, sans-serif, Ubuntu, sans-serif",
      },
      colors: {
        primary: "#FAEDDE",
        secondary: "#E4F519",
      },
    },
  },
  plugins: [],
};
