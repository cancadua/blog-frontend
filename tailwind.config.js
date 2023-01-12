/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '984px',
        xl: '1280px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    colors: {
      green: {
        DEFAULT: '#86C232',
        dark: '#61892F'
      },
      grey: {
        lighter: '#8e8d8a',
        light: '#6B6E70',
        DEFAULT: '#484B4F',
        dark: '#222629'
      },
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
