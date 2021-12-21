const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.zinc
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Hind", "sans-serif"],
        sub: ["Roboto Mono", "sans-serif"],
        sans: ["Hind", ...fontFamily.sans]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
