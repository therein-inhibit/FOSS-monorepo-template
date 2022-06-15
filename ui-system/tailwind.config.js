let isProd = process.env.NODE_ENV === "production";

module.exports = {
  content: [
    "./index.html",
    "./{src,containers,elements,components,widgets}/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  safelist: isProd ? [] : [{ pattern: /.*/ }],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
