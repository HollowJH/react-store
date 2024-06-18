/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": 'url("/assets/hero_bg.png")'
      },
      gridTemplateColumns: {
        'auto-fit-minmax': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
}