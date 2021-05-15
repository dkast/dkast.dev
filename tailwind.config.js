const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class",
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
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700")
          }
        },
        light: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300")
              },
              a: {
                color: theme("colors.red.300")
              },
              strong: {
                color: theme("colors.white")
              },
              "ol > li::before": {
                color: theme("colors.gray.400")
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600")
              },
              hr: {
                borderColor: theme("colors.gray.200")
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600")
              },
              h1: {
                color: theme("colors.white")
              },
              h2: {
                color: theme("colors.white")
              },
              h3: {
                color: theme("colors.white")
              },
              h4: {
                color: theme("colors.white")
              },
              "figure figcaption": {
                color: theme("colors.gray.400")
              },
              code: {
                color: theme("colors.white")
              },
              "a code": {
                color: theme("colors.white")
              },
              pre: {
                color: theme("colors.gray.200")
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400")
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600")
              }
            }
          ]
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ["dark"]
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
