/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Commissioner", "sans-serif"],
      },
      colors: {
        Moderatecyan: "hsl(176, 50%, 47%)",
        Darkcyan: "hsl(176, 72%, 28%)",
        Black: "hsl(0, 0%, 0%)",
        Darkgray: "hsl(0, 0%, 48%)",
      },
    },
  },
  plugins: [],
};
