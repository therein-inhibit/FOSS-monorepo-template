module.exports = {
  purge: [
    "./index.html",
    "./{src,containers,elements,components}/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
    "./node_modules/styles/**/*.{css,js}",
  ],
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
