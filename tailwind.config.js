/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glitch: "glitch .5s ease-in-out infinite",
        glitchReverse: "glitchReverse .5s ease-in-out infinite",
        shinging: "shinging 2.5s ease-in-out infinite",
        shingingReverse: "shingingReverse 2s ease-in-out infinite",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "10%": { transform: "translate(-4px, 4px)" },
          "20%": { transform: "translate(-4px, -4px)" },
          "30%": { transform: "translate(7px, 4px)" },
          "35%": { transform: "translate(0)" },
          "45%": { transform: "translate(0)" },
          "50%": { transform: "translate(4px, 4px)" },
          "60%": { transform: "translate(4px, -4px)" },
          "70%": { transform: "translate(0)" },
          "100%": { transform: "translate(0)" },
        },
        glitchReverse: {
          "0%": { transform: "translate(0)" },
          "10%": { transform: "translate(4px, -4px)" },
          "20%": { transform: "translate(4px, 4px)" },
          "30%": { transform: "translate(2px, 4px)" },
          "35%": { transform: "translate(0)" },
          "45%": { transform: "translate(0)" },
          "50%": { transform: "translate(-4px, -4px)" },
          "60%": { transform: "translate(-4px, 4px)" },
          "70%": { transform: "translate(0)" },
          "100%": { transform: "translate(0)" },
        },
        shinging: {
          "0%": { opacity: 1 },
          "5%": { opacity: 0.1 },
          "8%": { opacity: 1 },
          "10%": { opacity: 0.1 },
          "15%": { opacity: 1 },
          "30%": { opacity: 1 },
          "35%": { opacity: 0.1 },
          "40%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
        shingingReverse: {
          "0%": { opacity: 1 },
          "60%": { opacity: 1 },
          "65%": { opacity: 0.1 },
          "70%": { opacity: 0.1 },
          "75%": { opacity: 1 },
          "90%": { opacity: 0.1 },
          "92%": { opacity: 1 },
          "95%": { opacity: 0.1 },
          "100%": { opacity: 1 },
        },
        bounce: {
          "0%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      dropShadow: {
        blue: "0 0px 9px rgba(73,200,255, 1)",
        bluesmall: "0 0px 3px rgba(73,200,255, 1)",
        pink: "0 0px 9px rgba(252,122,213, 1)",
        pinksmall: "0 0px 3px rgba(252,122,213, 1)",
        white: "0 0px 9px rgba(255,255,255, .6)",
        whitebig: "0 0px 15px rgba(255,255,255, 1)",
        bigwhite: "0 0px 20px rgba(255,255,255, .3)",
        green: "0 0px 9px rgba(30, 255, 26, 1)",
        lightblue: "0 4px 9px rgba(21, 219, 255, 1)",
        black: "0 0px 9px rgba(0,0,0, .6)",
      },
      fontFamily: {
        lexend: ["Lexend"],
        pixel: ["'Press Start 2P'", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      colors: {
        header: {
          left: "#7500BC",
          right: "#1B0070",
          fright: "#1C113F",
          hover: "#F08DCF",
        },
        team: {
          top: "#7C4FFF",
          bottom: "#FF7777",
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
          bottom: "#4FF4FF",
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
          bottom: "#8000FF",
          left: "#D20ED6",
          right: "#57AEFF",
          pink: "#E653BA",
          blue: "#15DBFF",
        },
        register: {
          top: "#9E00FF",
          bottom: "#FC7AD5",
          required: "#94FFF9",
        },
        faq: {
          top: "#7000FF",
          bottom: "#FF8A65",
          middle: "#441797",
          question: "#F08DCF",
          answer: "#FBFBFB",
          noQuestion: "#01FFC2",
          contact: "#26DDE1",
          email: "#48BDFF",
        },
      },
      boxShadow: {
        hover: "0px 4px 10px #FFFFFF, 0px 4px 16px #FFFFFF",
      },
    },
  },
  plugins: [],
};
