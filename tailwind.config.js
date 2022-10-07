/* @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/page-components/**/*.{js,jsx,ts,tsx}",
    "./src/page-components/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "420px",
      smmd: "564px",
      md: "764px",
      lg: "1024px",
      lgxl: "1248px",
      xl: "1442px",
    },
    extend: {
      boxShadow: {
        test: "0 0 10px 10px hsl(0deg, 0%, 11.4%) inset",
      },
      colors: {
        lm: {
          background: "hsl(240deg, 24%, 96%)",
          primary: "#29C06C",
          "primary-soft": "#53DC90",
          black: "4D4D4D",
          "black-soft": "A4A4A4",
          lighter: "hsl(240deg, 24%, 96%)",
          light: "hsl(240deg, 2%, 78%)",
          base: "	hsl(240deg, 2%, 57%)",
          dark: "hsl(240deg, 1%, 39%)",
          darker: "hsl(0deg, 0%, 11.4%)",
          DEFAULT: "hsl(192, 100%, 46%)",
          hover: "hsl(192, 100%, 41%)",
          darkHover: "hsl(0deg, 0%, 19.4%)",
          "secondary-hover": "hsl(240deg, 24%, 91%)",
        },
        dm: {
          DEFAULT: "hsl(192, 100%, 46%)",
          background: "hsl(0deg, 0%, 11.4%)",
        },
        tensorflow: "linear-gradient(#FFA800, #FF6F00)",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
