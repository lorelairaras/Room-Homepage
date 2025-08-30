/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 100%, 100%)",
        black: "hsl(0, 0%, 0%)",
        "grey-500": "hsl(0, 0%, 63%)",
        "grey-800": "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
