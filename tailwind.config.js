/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  safelist: [
    'bg-white',
    'bg-gray-800',
    'bg-gray-100',
    'text-black',
    'text-white',
    'text-gray-900',
    'border-gray-200',
    'border-gray-700',
    'border-gray-300',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}