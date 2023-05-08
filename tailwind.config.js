/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#070707",
        },
        main: "#090d34",
      },
    },
  },
  plugins: [],
}
