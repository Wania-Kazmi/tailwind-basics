/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      keyframes:{
        wiggle: {
          '0%, 100%': {transform: 'rotate(-12deg)'},
          '50%': {transform: 'rotate(12deg)'}
        }
      }
    },
  },
  plugins: [],
}
