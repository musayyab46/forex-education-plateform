/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite default location for HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all JS/TS/JSX/TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



