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
        grayColor: '#232323',
        offWhite: '#E8E8E8',
        whiteColor: '#FFF',
      },
      backgroundImage:{
        bgImage: "url('../src/assets/bg-image.png')",
      },
      height:{
        heigthScreen: 'calc(100vh - 5.37em)',
      },
    },
  },
  plugins: [],
}

