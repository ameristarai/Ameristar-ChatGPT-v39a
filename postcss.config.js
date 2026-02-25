// postcss.config.js
// Vite reads this automatically — no extra vite.config.ts changes needed.
// tailwindcss: generates utility classes from tailwind.config.js
// autoprefixer: adds vendor prefixes (-webkit-, -moz-, etc.) for older browsers
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
