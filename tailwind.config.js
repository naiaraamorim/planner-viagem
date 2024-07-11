/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:'Inter',
      },
      backgroundImage: {
        imagemFundo: 'url(/fundo.png)'
      }
    },
  },
  plugins: [],
}