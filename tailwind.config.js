/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'main': {
          '50': '#f2fbfa',
          '100': '#d2f5f2',
          '200': '#a4ebe4',
          '300': '#6fd9d3',
          '400': '#41c0bd',
          '500': '#2cb5b4',
          '600': '#1d8284',
          '700': '#1b696a',
          '800': '#1a5355',
          '900': '#1a4547',
        },
        'shuttle-gray': {
          '50': '#f4f6f7',
          '100': '#e3e7ea',
          '200': '#cad2d7',
          '300': '#a6b3ba',
          '400': '#798b97',
          '500': '#5e6f7c',
          '600': '#505d68',
          '700': '#464f58',
          '800': '#3e454c',
          '900': '#373c42',
        },
        'east-bay': {
          '50': '#f5f7fa',
          '100': '#eaeff4',
          '200': '#d0dce7',
          '300': '#a7bfd2',
          '400': '#779eb9',
          '500': '#5682a1',
          '600': '#436786',
          '700': '#3d5d79',
          '800': '#30485c',
          '900': '#2c3d4e',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
