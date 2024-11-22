/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#111111',
        secondary: '#666666',
        accent: '#111111',
        dots: 'var(--dots-color)',
      },
    },
  },
  plugins: [],
};