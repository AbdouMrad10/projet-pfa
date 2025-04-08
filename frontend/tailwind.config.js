/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],  
  theme: {
    extend: {
      colors: { 
        Color1: '#033F73',      
        Color2: '#BFAF99',
        Color3: '#59280B' ,   
        Color4: '#BF8C6F',     
        Color5: '#8C513B',         
        maxcolor: '#3b0764',     
      },
    },
      fontFamily: {
        primaryFont: ['Source Code Pro', 'serif'],
        secondaryFont: ['Rubik', 'serif'],
        poppins: ["Poppins", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        robotor: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],


      },
      boxShadow: {
        'custom-shadow': '0px 4px 36.1px 10px rgba(0, 0, 0, 0.14)',
        'custom-shadow2': '0px 2px 13.3px 0px  rgba(0, 0, 0, 0.20)',
        'img-shadow': '0px 4px 21.9px 0px rgba(0, 0, 0, 0.34)',

      },
  },
  plugins: [],
}

