module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla'],
        barlow: ['Barlow'],
      },
      colors: {
        skin: {
          'kmc-deep-navy': '#001738',
          'kmc-orange': '#FF7200',
          'kmc-red': '#EF4444',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
