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
        third: '#ECEEE7',
        fourth: '#f0f1ec'
      },
      colors: {
        primary: '#FCBF49',
        secundary: '#82A951'
      },
      keyframes: {
        moverSides: {
          '0%': { transform: 'translateX(30px) scale(1)' },
          '50%': { transform: 'translateX(-30px) scale(1.1)' },
          '100%': { transform: 'translateX(30px) scale(1)' }
        }
      },
      animation: {
        moverSides: 'moverSides 2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
