/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Add this line for React components
  ],
  theme: {
    extend: {
      screens:{
        'smd':'440px',
        'md':'768px',
      },
      fontFamily: {
          vermin: ['VerminVibes'],
          novega: ['Novega'],
          knightWarrior: ['KnightWarrior'],
          fastLines: ['FastLines'],
          crossFly: ['CrossFly'],
          speedPixel: ['speedPixel'],
          speedPixelItalic: ['speedPixelItalic'],
          brave81: ['Brave81']
        },
        keyframes: {
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.025)' }, // slightly bigger
        },
      },
      animation: {
        scalePulse: 'scalePulse 3s ease-in-out infinite', // 2s for slow speed
      },
    },
  },
  plugins: [],
};
