/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          gray: "#F8F8F8",
          soft: "#E5E5E5",
          muted: "#71717A",
          dark: "#0F172A",
          border: "#E2E8F0"
        },
        primary: "#000000",
        surface: "#FFFFFF",
        subtle: "#F9FAFB",
        offwhite: "#F8F8F8",
        success: "#10B981",
        error: "#EF4444",
        borderSubtle: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px"
      },
    },
  },
  plugins: [],
}
