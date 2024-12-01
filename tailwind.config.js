/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
    },
     colors: {
      'primary': "#A10000", // example of another custom color
      'secondary': "#ffed4a", // example of a yellow color
      'neutral': "#f1f1f1", // another example (light gray)
      'white': '#ffffff', // this is still here from Tailwind default
      'black': '#000000', // this is still here from Tailwind default
    },
    extend: {
   },
  },
  plugins: [],
};