const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bitter", "sans-serif"],
        body: ["Hind", "sans-serif"],
        sub: ["Roboto Mono", "sans-serif"],
        sans: ["Hind", ...fontFamily.sans]
      },
      typography: theme => {
        DEFAULT: {
          css: {
            color: theme("colors.gray.700");
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
