/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#61dafb', 
        dark: '#050f23',   
        light: '#ffffff',  
        accent: '#0070f3', 
      },
    },
  },
  plugins: [],
}