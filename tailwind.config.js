/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.src/app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
