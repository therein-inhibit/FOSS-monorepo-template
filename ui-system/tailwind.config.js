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
    extend: {},
  },
  plugins: [],
};
