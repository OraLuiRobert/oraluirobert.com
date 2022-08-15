module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#00A5FF",
          100: "#0790D7",
        },
        green: {
          50: "#08F7F7",
        },
        gray: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#D8D8D8",
          300: "#C4C4C4",
          400: "#979797",
        },
      },
    },
  },
  plugins: [],
};
