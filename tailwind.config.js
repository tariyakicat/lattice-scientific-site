/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#111111",
        paper: "#FAFAFA",
        cyan: "#06B6D4",
        magenta: "#EC4899",
        orange: "#F97316",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17,17,17,0.08)",
        card: "0 16px 44px rgba(17,17,17,0.08)",
      },
    },
  },
  plugins: [],
};
