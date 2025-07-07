/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if your paths are different
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow-left': 'spin-left 2s linear infinite',
      },
      keyframes: {
        'spin-left': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};
