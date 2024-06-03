
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs1: "330px",
      xs2: "640px",
      xs3: "1000px",
      xs4: "1200px",
            
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage : {
        'smbg' : "url('../public/smbg.jpg')",
      },
      boxShadow : {
        'dull' : '0 35px 60px 10px black',
        'low-dull' : '0 5px 20px 1px rgb(44,33,22)',
      },
      fontFamily:{
        Sevi:["Permanent Marker"]
      },
      dropShadow: {
        'shade': '0 65px 35px rgba(0, 0, 0)',
      }
    },
  },
  plugins: [],
}
