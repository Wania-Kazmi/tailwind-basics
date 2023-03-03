/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '550px',
        md: '800px',
        lg: '1200px',
        xl: '1440'
      },
      colors:{
        primary: '#ff5733',
        secondary: '#fffc33',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    fontFamily:{
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    
  },
  plugins: [],
}
