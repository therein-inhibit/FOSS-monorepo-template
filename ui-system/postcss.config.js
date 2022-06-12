module.exports = {
  purge: ['./index.html', './{src,containers}/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
