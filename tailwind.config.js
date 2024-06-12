/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "1rem",
        lg: "1rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
