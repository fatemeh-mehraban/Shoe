/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../img/WallpaperDog-205346101.png')",
      },
      fontFamily:{
        'Roboto':'Roboto'
      }
    },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}