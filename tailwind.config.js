/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rufina: ['Rufina', 'sans-serif'],
        inika: ['Inika', 'serif'],
      },
      colors: {
        'custom-green': '#273812',
        'second-green': '#B8CAA8',
        'third-green':'#3C5220',
        'new-green': '#8DA260',
        'black-87': '#f5f5f5',
        'button-green': '#8DA260',
      },
      screens: {
        'xs': '150px',  
      },
    }
  },
  plugins: [
  ],
}