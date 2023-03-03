/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //     // 'sans': ['ui-sans-serif', 'system-ui'],
            'poppins': ['var(--font-poppins)'],
            'sofia': ["var(--font-sofia)"]
        //     // 'mono': ['ui-monospace', 'SFMono-Regular']
          
        },
    },
  },
  plugins: [],
}
