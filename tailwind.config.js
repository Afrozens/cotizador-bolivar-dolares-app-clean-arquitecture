/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        signika: "'Signika Negative', sans-serif"
      },
      backgroundColor: {
        primary: '#FCBF49',
        secundary: '#82A951',
        third: '#ECEEE7'
      },
      colors: {
        primary: '#FCBF49',
        secundary: '#82A951'
      }
    }
  },
  plugins: []
}
