/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FDFAF6',
        bg2: '#FFF8F0',
        primary: '#8B4513',
        'primary-light': '#A0522D',
        accent: '#D4956A',
        'accent-light': '#F0C9A8',
        ink: '#2C2C2C',
        muted: '#7A6A5A',
        border: '#E8DDD0',
        success: '#4A7C59',
        'step-done': '#F4FAF6',
        'step-border-done': '#B8DEC6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
