/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#6D1028', burgundy: '#3B0718', gold: '#D4AF65',
        cream: '#FFF8E7', ivory: '#F8F0DF', rose: '#B76E79',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        deva: ['Noto Serif Devanagari', 'serif'],
      },
    },
  },
  plugins: [],
}
