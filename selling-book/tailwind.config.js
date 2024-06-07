/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'COLOR_1': '#E8AA42', 
        'COLOR_2': '#E57C23', 
        'COLOR_3': '#025464', 
        'COLOR_4': '#F8F1F1', 
        'COLOR_5': '#FF004D', 
        'COLOR_6': '#008000', 
        'COLOR_7': '#D9D9D9', 
      }
    },
  },
  plugins: [],
}