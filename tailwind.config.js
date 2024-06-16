/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        averia :['CustomFont', 'Averia Serif Libre'],
        inter : ['CustomFont', 'Inter']
      }
    },
  },
  plugins: [],
}

