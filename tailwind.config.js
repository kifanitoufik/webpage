/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          sand: {
            light: '#8A8274',
            DEFAULT: '#6E6658',
            dark: '#524C42'
          },
          dark: {
            light: '#2D2A2D',
            DEFAULT: '#161216',
            dark: '#0D0A0D'
          },
          brown: {
            light: '#635650',
            DEFAULT: '#4C413B',
            dark: '#352D29'
          },
          taupe: {
            light: '#706D64',
            DEFAULT: '#59564D',
            dark: '#403E37'
          },
          coffee: {
            light: '#483939',
            DEFAULT: '#312626',
            dark: '#1A1414'
          },
          charcoal: {
            light: '#4F4E4D',
            DEFAULT: '#383736',
            dark: '#222221'
          },
          night: {
            light: '#3A3B3C',
            DEFAULT: '#232425',
            dark: '#0F1011'
          },
          slate: {
            light: '#464349',
            DEFAULT: '#2F2C34',
            dark: '#1B1920'
          },
          steel: {
            light: '#636369',
            DEFAULT: '#4C4C54',
            dark: '#35353B'
          }
        }
      }
    },
  },
  plugins: [],
}