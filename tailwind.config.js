module.exports = {
  theme: {
    fontFamily: {
      display: ["Bitter", "sans-serif"],
      body: ["Hind", "sans-serif"],
      sub: ["Roboto Mono", "sans-serif"]
    },
    extend: {
      colors: {
        "dark-gray": "#121212"
      },
      screens: {
        "dark-mode": { raw: "(prefers-color-scheme: dark)" }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")]
};
