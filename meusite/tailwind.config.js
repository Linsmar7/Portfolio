module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: { 100: '#D6ACF2', 200: '#8850BF', 300: '#5A378C', 400: '#392259', 500: '#190F26'},
      },
    },
  },
  textColor: {
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
