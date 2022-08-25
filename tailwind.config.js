module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "Helvetica Neue", "Helvetica", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#6ea6c3db",
          100: "#6ea6c3",
          200: "#29ADE3",
        },
        green: {},
        yellow: {
          50: "#FFDF6E",
        },

        red: {
          50: "#dc2626",
        },
        purple: {},
      },
    },
  },
  plugins: [],
};
