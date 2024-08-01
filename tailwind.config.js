/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      placeholderColor: {
        'custom': '#6b7280' 
      },
      fontSize: {
        'xl': '1.25rem'  
      },
      zIndex: {
        '60': '60', 
      }
    },
  },
  variants: {
    extend: {
      placeholderColor: ['focus'],
    },
  },
  plugins: [],
}

