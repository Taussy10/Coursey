/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily:{
      rRegular: ["Roboto_400Regular"],
      rSemibold: ["Roboto_500Medium"],
      rBold: ["Roboto_700Bold"],
      }
    },
  },
  plugins: [],
};
