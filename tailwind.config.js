/** @type {import('tailwindcss').Config} */

 


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        madimi:['Madimi One', 'sans-serif'],
        workbench:['Workbench', 'sans-serif']
      },
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
      }
    },
  },
  plugins: [],
}

