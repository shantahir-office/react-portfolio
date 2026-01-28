module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js", // tw-elements ko scan karne ke liye
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00b67a",    // tumhara green
        secondary: "#33a1e0",
      },
    },
  },
  plugins: [],
};
