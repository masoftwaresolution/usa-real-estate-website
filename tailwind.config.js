/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#101D32', 800: '#16263F', 700: '#1D3150' },
        gold: { DEFAULT: '#C5A46D', light: '#D8BE90', dark: '#A8884F' },
        offwhite: '#F7F8FA',
        ink: '#263445',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
