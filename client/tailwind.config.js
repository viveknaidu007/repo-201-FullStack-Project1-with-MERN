/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-200" : "#ffbg00",
        "primary-100" : "#ffc929",
        "secondary-200" : "#00b050",
        "secondary-light" : "#0b1a78",
      }
    },
  },
  plugins: [],
}