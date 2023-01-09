/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    theme: {
      extend: {},
      fontFamily:{
        'roboto':["Roboto Slab", "serif"],
        'kanit':["Kanit", "sans-serif"],
        'courgette':["Courgette", "cursive"]
       },
    },
 },
  plugins: [require("daisyui"),
  require('flowbite/plugin'),
  require("@tailwindcss/aspect-ratio"),
  require('tw-elements/dist/plugin')],
};
