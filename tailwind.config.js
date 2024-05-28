/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html','@', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('@/assets/images/landing.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

