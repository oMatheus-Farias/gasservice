/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#A30F13',
        redColor: '#ED3237',
        offWhite: '#E8E8E8',
        whiteColor: '#FFF',
      },
    },
  },
  plugins: [],
}

