/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include React components
    "./index.html", // Include HTML files
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        546: "546px",
      },
      colors: {
        primary: {
          900: "#081426",
          700: "#193D71",
          500: "#2967BC",
          200: "#A3C1EB",
          50: "#E6EEFA",
          300: "#75A2E1",
          100: "#D1E0F5",
        },
        secondary: {
          900: "#0B1923",
          700: "#1F4966",
          500: "#347BAA",
          200: "#A5CBE4",
          50: "#E8F1F8",
        },
        accent: {
          900: "#500D0C",
          700: "#E0312E",
          500: "#F7CAC9",
          200: "#FCE9E9",
          50: "#FEFBFB",
        },
        warning: {
          900: "#78350F",
          700: "#D97706",
          500: "#F59E0B",
          200: "#FDE68A",
          50: "#FFFBEB",
        },
        success: {
          900: "#14532D",
          700: "#16A34A",
          500: "#22C55E",
          200: "#BBF7D0",
          50: "#F0FDF4",
        },
        neutral: {
          900: "#222425",
          700: "#63696E",
          500: "#A9ADB1",
          200: "#DCDEDF",
          50: "#F7F7F8",
          400: "#B9BDC0",
          300: "#CCCFD1",
          100: "#EFF0F0",
          30: "#FEFEFE",
        },
      },
    },
  },
  plugins: [flowbitePlugin],
};
