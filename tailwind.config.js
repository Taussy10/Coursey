/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.src/app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily:{
      iRegular: ["Inter_400Regular"],
      iSemibold: ["Inter_600SemiBold"],
      iBold: ["Inter_700Bold"],
      }
    },
  },
  plugins: [],
};
