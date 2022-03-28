module.exports = {
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      heading: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: { 100: '#D6ACF2', 200: '#8850BF', 300: '#5A378C', 400: '#392259', 500: '#190F26'},
        'transparent-purple': 'rgba(90, 55, 140, 0.7)',
      },
      boxShadow: {
        '3xl': '0 8px 15px rgba(50, 50, 50, 0.7)',
      },
      backgroundSize: {
        'underline': '2em',
        'underlineHover': '100%',
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
