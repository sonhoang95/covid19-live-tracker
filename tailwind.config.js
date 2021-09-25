module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-color-primary)",
        secondary: "var(--bg-color-secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
