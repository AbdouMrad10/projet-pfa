/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],  
  theme: {
    extend: {
      colors: { 
        primary: '#a855f7',      
        secondary: '#d8b4fe',
        third: '#7e22ce' ,   
        clairbg: '#e2e8f0',     
        clairText: '#fff',         
        maxcolor: '#3b0764',     
      },
    },
      fontFamily: {
        primaryFont: ['Source Code Pro', 'serif'],
        secondaryFont: ['Rubik', 'serif'],


      },
  },
  plugins: [],
}

