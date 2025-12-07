/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        'rose-gold': '#B76E79',
        'cream': '#FDFBF7',
        'soft-pink': '#FCE7E7',
        'deep-chocolate': '#3E2723',
      }
    },
  },
  plugins: [],
}