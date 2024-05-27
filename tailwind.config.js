/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      flex: {
        'custom-2': '1 2 0%',
      },
      colors: {
        primary: '#1C2333',
      },
    },
  },
  plugins: [],
};
