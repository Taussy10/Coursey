/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily:{
        // look by dash you create two words 
        // so it will give error so put in key in quotes(string)
        // It  will work cause keys are under the hood strings
      "roboto-regular": ["Roboto_400Regular"],
      "roboto-semibold": ["Roboto_500Medium"],
      "roboto-bold": ["Roboto_700Bold"],
      }
    },
  },
  plugins: [],
};
