/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fond-main': "url('/src/assets/background-main.jpg')",
      },
    },
  },
  plugins: [],
};
