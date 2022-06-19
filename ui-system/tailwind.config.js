let isProd = process.env.NODE_ENV === "production";

module.exports = {
  content: [
    "./index.html",
    "./{src,containers,elements,components,widgets}/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],

  // NOTE: the reason to add all tailwind is to allow a
  // user to edit a storybook using tailwind classes
  safelist: isProd ? [] : [{ pattern: /.*/ }],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "app-white": {
          50: "#FFFFFF",
          100: "#EBEBEB",
          200: "#E9E9E9",
          300: "#D9D9D9",
          400: "#C8C8C8",
        },
        "app-light": "#e9e9e9",
      },
    },
  },
  plugins: [],
};
