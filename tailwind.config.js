import defaultTheme from 'tailwindcss/defaultTheme'
import FJallaOne from 'stat'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        'sf-regular': ['"Sf Pro Display Regular"', ...defaultTheme.fontFamily.sans],
        'sf-medium': ['"Sf Pro Display Medium"', ...defaultTheme.fontFamily.sans],
        'sf-bold': ['"Sf Pro Display Bold"', ...defaultTheme.fontFamily.sans],
        'sf-black': ['"Sf Pro Display Black"', ...defaultTheme.fontFamily.sans],
        'sf-heavy': ['"Sf Pro Display Heavy"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: []
}