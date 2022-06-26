let isProd = process.env.NODE_ENV === "production";

let appGrayColor = require("../config/tailwind-colors");

module.exports = {
  content: [
    "./index.html",
    "./{src,containers,elements,components}/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
    "./node_modules/styles/**/*.{css,js}",
  ],

  // NOTE: the reason to add all tailwind is to allow a
  // user to edit a storybook using tailwind classes
  safelist: isProd ? [] : [{ pattern: /.*/ }],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        // xs: { raw: "(min-width: 420px) and (min-height:420px)" },
        // sm: { raw: "(min-width: 640px) and (min-height:640px)" },
        // md: { raw: "(min-width: 768px) and (min-height:768px)" },
        // lg: { raw: "(min-width: 1024px) and (min-height:1024px)" },
        // xl: { raw: "(min-width: 1280px) and (min-height:1280px)" },
        // "2xl": { raw: "(min-width: 1536px) and (min-height:1536px)" },
      },
      colors: {
        ...appGrayColor,
      },
    },
  },
  plugins: [],
};
