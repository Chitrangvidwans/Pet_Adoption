/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#494949",
          "200": "#333",
          "300": "rgba(66, 66, 66, 0.36)",
        },
        black: "#000",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        darkred: "#931212",
        goldenrod: "#ffbd59",
        lightgray: "#cbcbcb",
        silver: "rgba(191, 191, 191, 0)",
        darkgray: "#999",
        gray: "rgba(255, 255, 255, 0)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "4xs": "9px",
        "2xs": "11px",
        "6xs": "7px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      "8xl": "27px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
