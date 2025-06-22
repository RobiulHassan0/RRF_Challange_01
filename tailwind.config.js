/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
            'roboto': ['Roboto', 'sans-serif'],
        },
        boxShadow: {
        'custom-light': '1px 5px 50px 0px rgba(84, 99, 122, 0.1)',
      },
    },
  },
  plugins: [],
}
