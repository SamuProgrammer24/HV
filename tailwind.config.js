/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#34124D",
        cardColor: "#501B75",
        highLightColor: "#A037EB",
        spaceColor: "#272142",
        borderColor: "#16202C",
      },
    },
  },
  plugins: [],
};
