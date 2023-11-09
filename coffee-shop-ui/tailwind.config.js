/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,ts}", "./src/app/**/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      yellow: "#F9DCB4",
      brown: "#4b1b09",
      beige: "#E2D5C2",
      white: "#f5f5f5",
      gray: "#d9d9d9",
      lightbrown: "#857773",
      yellowbrown: "rgba(244, 219, 186, 0.6)",
    },
    fontFamily: {
      kufam: "Kufam",
      kranky: "Kranky",
    },
    safelist: [
      {
        pattern: /(bg|text|border|from|to)-(yellow|brown|beige|white)/,
      },
    ],
  },
  plugins: [],
};
