/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F7A3B',
          light: '#4CAF50',
          dark: '#1B5E20'
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          dark: '#E0E0E0'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}