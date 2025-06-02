/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { height: '0', transform: 'translateY(-10px)' },
          '100%': { height: 'fit', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

