// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f7ffe9",
          100: "#eaffc2",
          200: "#d6ff99",
          300: "#c1ff72", // main
          400: "#b0ff4d",
          500: "#c1ff72", // main
          600: "#a0e65e",
          700: "#7fc94a",
          800: "#5eac36",
          900: "#3d8f22",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
