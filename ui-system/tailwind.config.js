let isProd = process.env.NODE_ENV === "production";

module.exports = {
  content: [
    "./index.html",
    "./{src,containers,elements,components}/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],

  // NOTE: the reason to add all tailwind is to allow a
  // user to edit a storybook using tailwind classes
  safelist: isProd ? [] : [{ pattern: /.*/ }],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "app-gray": {
          "000": "var(--app-gray-000)",
          "001": "var(--app-gray-001)",
          "002": "var(--app-gray-002)",
          "003": "var(--app-gray-003)",
          "004": "var(--app-gray-004)",
          "005": "var(--app-gray-005)",
          "006": "var(--app-gray-006)",
          "007": "var(--app-gray-007)",
          "008": "var(--app-gray-008)",
          "009": "var(--app-gray-009)",
          "010": "var(--app-gray-010)",
          "011": "var(--app-gray-011)",
          "012": "var(--app-gray-012)",
          "013": "var(--app-gray-013)",
          "014": "var(--app-gray-014)",
          "015": "var(--app-gray-015)",
          "016": "var(--app-gray-016)",
          "017": "var(--app-gray-017)",
          "018": "var(--app-gray-018)",
          "019": "var(--app-gray-019)",
          "020": "var(--app-gray-020)",
          "021": "var(--app-gray-021)",
          "022": "var(--app-gray-022)",
          "023": "var(--app-gray-023)",
          "024": "var(--app-gray-024)",
          "025": "var(--app-gray-025)",
          "026": "var(--app-gray-026)",
          "027": "var(--app-gray-027)",
          "028": "var(--app-gray-028)",
          "029": "var(--app-gray-029)",
          "030": "var(--app-gray-030)",
          "031": "var(--app-gray-031)",
          "032": "var(--app-gray-032)",
        },
      },
    },
  },
  plugins: [],
};
