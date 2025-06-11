/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#001133',
          200: '#001A3A',
          300: '#002266',
          400: '#000D1A',
          500: '#00061F',
        },
        accent: {
          100: '#FF4433',
          200: '#FF6655',
          300: '#FF8877',
          400: '#CC3729',
          500: '#993026',
        },
        highlight: {
          100: '#FFDD00',
          200: '#FFEE66',
          300: '#FFFF99',
          400: '#CCB300',
          500: '#998900',
        },
        background: {
          100: '#FFFFFF',
          200: '#F2F2F2',
          300: '#E6E6E6',
        },
        neutral: {
          100: '#333333',
          200: '#4D4D4D',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

