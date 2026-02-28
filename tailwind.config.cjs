/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Hacker / Super Tech Dark Mode Palette
        primary: "#050505",       // Deep black background
        secondary: "#a3a3a3",     // Neutral grey for secondary text
        tertiary: "#141414",      // Slightly lighter black for cards
        accent: "#39ff14",        // Neon hacker green
        "accent-dark": "#0a9900", // Darker hacker green for hover states
        "black-100": "#0a0a0a",   // Subtle variations for depth
        "black-200": "#000000",   // True black
        "white-100": "#f4f4f5",   // Zinc-100 text

        // High-end Light Mode Palette (Clean, Airy)
        "light-primary": "#ffffff",  // Pure white background
        "light-secondary": "#52525b",// Zinc-600
        "light-tertiary": "#f4f4f5", // Zinc-100 for cards
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "card-light": "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        tech: ["Orbitron", "sans-serif"],
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-pattern-light": "url('/src/assets/herobg.png')", // We can reuse or set to none if it clashes
      },
    },
  },
  plugins: [],
};
