/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        blue: "0 0px 9px rgba(73,200,255, 1)",
        pink: "0 0px 9px rgba(252,122,213, 1)",
        white: "0 0px 9px rgba(0,0,0, 1)",
        green: "0 0px 9px rgba(30, 255, 26, 1)",
        lightblue: "0 4px 9px rgba(21, 219, 255, 1)",
      },
      fontFamily: {
        lexend: ["Lexend"],
        poppins: ["Poppins"],
        pixel: ["'Press Start 2P'", "cursive"],
      },
      backgroundImage: {
        "split-green-to-purple":
          "linear-gradient(to bottom, #c5c6fb 48% , black 48%, black 52%, #c9f9be 52%);",
      },
      colors: {
        header: {
          left: "#7500BC",
          right: "#1B0070",
          fright: "#1C113F",
          hover: "#F08DCF",
        },
        team: {
          top: "#8C7DFF",
          bottom: "#4FF4FF",
          green: "#C9F9BE",
          pink: "#F7CDE0",
          yellow: "#FCFBB6",
          hotpink: "#F08DCF",
          purple: "#A480F2",
          gold: "#FAD6A5",
          teal: "#9BF6FC",
          orange: "#F4ACAD",
          lightpurple: "#BDB2FA",
          committee: "#F08DCF",
        },
        sponsors: {
          top: "#CC00FF",
          bottom: "#8C7DFF",
        },
        landing: {
          brightgreen: "#1EFF1A",
          top: "#972875",
          bottompink: "#FC7AD5",
          bottom: "#9E00FF",
          secondtop: "#491CFF",
          secondbottom: "#05001A",
        },
        about: {
          top: "#3D008A",
          bottom: "#771CAE",
          left: "#D20ED6",
          right: "#57AEFF",
          pink: "#E653BA",
          blue: "#15DBFF",
        },
        register: {
          top: "#9E00FF",
          bottom: "#FC7AD5",
        },
      },
      boxShadow: {
        hover: "0px 4px 10px #FFFFFF, 0px 4px 16px #FFFFFF",
      },
    },
  },
  plugins: [],
};
