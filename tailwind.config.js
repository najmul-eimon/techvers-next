/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ['TimesNewRoman', ...defaultTheme.fontFamily.sans],
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        lg: "12px",
        xl: "12px",
        "2xl": "12px",
      },
      screens: {
        sm: "640px",
        md: "700px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1140px"
      }
    },
    extend: {
      colors: {
        primary: "#F8444F",
        secondary: "#012232",
        "primary-text": "#012C3D",
        "secondary-text": "#456170"
      },
    },
  },
  plugins: [],
}
