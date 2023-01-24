/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00FFC2",
        bkg: "#212121",
        darker: "#111111",
        redsemi: "#dd0e0e26",
        lightred: "#F57070",
        greensemi: "#0b992226",
        lightgreen: "#6BF581",
        text: "#EAEAEA",
        textsemi: "#EBEBEB80",
        blacksemi: "#000000CC",
        blue: "#60B3FF",
        bluesemi: "#0035664d",
      }
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    fontSize: {
      xs: "18px",
      sm: "24px",
      lg: "40px",
      base: "32px",
    },
    borderRadius: {
      "2xl": "20px",
      lg: "8px"
    }
  },
  plugins: [],
}
