/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
  ],
  theme: { 
    extend: {
      screens:{
        'keypad':'400px',
        },
      fontFamily:{
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    colors:{
      'pale-blue':'#F5F6FF',
      'coral-red':'#FF6452',
      'primary': "#ECEEFF",
      "slate-gray": "#6D6D6D",
      "white-400": "rgba(255, 255, 255, 0.80)"
    },
    boxShadow: {
      '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
    },
    backgroundImage: {
      'hero': "url('assets/images/collection-background.svg')",
      'card': "url('assets/images/thumbnail-background.svg')",
    },
    },
  },
  plugins: [],
}

