/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b5577',
      },
      boxShadow:{
        "card": "0px 17px 46.06px 2.94px rgba(40, 40, 40,0.75)",

      }
    },
  },
  plugins: [],
}