/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins: ["Poppins"],
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
      },
      boxShadow: {
        hover: "0px 4px 10px #FFFFFF, 0px 4px 16px #FFFFFF",
      },
    },
  },
  plugins: [],
};
