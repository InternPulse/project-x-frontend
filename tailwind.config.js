/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include React components
    "./index.html", // Include HTML files
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};
