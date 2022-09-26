/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        plus: `url('/plus.png')`,
        minus: "url('/minus.png')",
      },
      colors: {
        rosehack: {
          primary: {
            red: "##fe096c",
            pink: "#fe2cdf",
            lightpurple: "#d225fb",
            darkblue: "#0013ff",
            blue: "#2cbcf1",
            teal: "#0afefe",
            green: "#00ffae",
            yellow: "#fef851",
            darkpurple: "#5d0ed6",
            darkerpurple: "#390a62",
            darkestpurple: "#1c113f",
            purple: "#9d4cf2",
            navy: "#002288",
            orange: "#f2914",
            gray: "#7c858d",
          },
          secondary: {
            orange: "#fad6a5",
            yellow: "#fcfbb6",
            green: "#c9f9be",
            teal: "#9bf6fc",
            lightpink: "#f7cde0",
            blue: "#a0c3fa",
            purple: "#bdb2fa",
            pink: "#f5c5fc",
            salmon: "#f08dcf",
            darkpurple: "#a480f2",
            lightpurple: "#c5c6fb",
            gray: "#c5c7d3",
            white: "#fbfbfb",
            darkpink: "#f5bcdb",
            peach: "#f4acad",
          },
        },
      },
    },
  },
  plugins: [],
};
