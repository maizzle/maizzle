import emailPreset from 'tailwindcss-preset-email'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    emailPreset,
  ],
  content: [
    './src/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
}
