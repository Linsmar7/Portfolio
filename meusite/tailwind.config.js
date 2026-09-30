module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        purple: {
          50: "#fbf7ff",
          100: "#d6acf2",
          200: "#8850bf",
          300: "#5a378c",
          400: "#392259",
          500: "#190f26",
          600: "#0f081d",
          700: "#080411",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(136, 80, 191, 0.45)",
      },
    },
  },
  plugins: [],
};
