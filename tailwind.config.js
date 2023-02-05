/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        bluesemilight: "#00356626"
      },
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    fontSize: {
      xs: "clamp(1.13rem, calc(1.04rem + 0.22vw), 1.25rem)",
      sm: "clamp(1.35rem, calc(1.20rem + 0.38vw), 1.56rem)",
      base: "clamp(1.62rem, calc(1.38rem + 0.59vw), 1.95rem)",
      lg: "clamp(1.94rem, calc(1.59rem + 0.89vw), 2.44rem)",
      xl: "clamp(2.33rem, calc(1.62rem + 1.28vw), 2.60rem)",
    },
    borderRadius: {
      "2xl": "20px",
      lg: "8px"
    }
  },
  plugins: [],
}
