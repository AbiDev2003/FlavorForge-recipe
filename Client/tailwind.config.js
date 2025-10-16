/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./App.jsx",
    "./**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        caudex: ['Caudex', 'serif'],
      },
    },
  },
  plugins: [],
}

