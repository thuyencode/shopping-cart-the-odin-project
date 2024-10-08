import daisyui from 'daisyui'
import * as defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      gridTemplateColumns: {
        ram: 'repeat(auto-fill, minmax(256px, 1fr))'
      }
    }
  },
  plugins: [daisyui]
}
