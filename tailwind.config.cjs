/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fond-main': "url('/src/assets/background-main.jpg')",
      },
      keyframes: {
        moverSides: {
          '0%': { transform: 'translateX(30px) scale(1)'},
          '50%': {transform: 'translateX(-30px) scale(1.1)'},
        '100%': {transform: 'translateX(30px) scale(1)'}
        }
      },
      animation: {
        'moverSides': 'moverSides 2s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
};
