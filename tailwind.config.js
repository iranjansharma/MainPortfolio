module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      lato: ['lato', 'sans-serif'],
      readex: ['Readex Pro', 'sans-serif']
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        12: '6rem',
      },
      colors: {
        'primary-color': 'var(--space-cadet)',
        'secondary-color': 'var(--klein-blue)',
      },
    },
  },
  plugins: [],
};
