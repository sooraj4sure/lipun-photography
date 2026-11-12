/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0a08",
        coal: "#14110d",
        gold: "#c9a24b",
        goldlight: "#e6c87a",
        ivory: "#f5efe3",
        muted: "#a89f8d",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
