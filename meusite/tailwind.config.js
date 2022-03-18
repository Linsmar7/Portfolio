module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Anonymous Pro', 'monospace'],
      heading: ['Anonymous Pro', 'monospace'],
    },
    extend: {
      colors: {
        purple: { 100: '#D6ACF2', 200: '#8850BF', 300: '#5A378C', 400: '#392259', 500: '#190F26'},
      },
      boxShadow: {
        '3xl': '0 8px 15px rgba(50, 50, 50, 0.7)',
      }
    },
  },
  textColor: {
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
