const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bitter", "sans-serif"],
        body: ["Hind", "sans-serif"],
        sub: ["Roboto Mono", "sans-serif"]
      }
    }
  }
};
