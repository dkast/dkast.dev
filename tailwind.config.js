const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        cyan: colors.cyan,
        lime: colors.lime,
        trueGray: colors.trueGray
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
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
