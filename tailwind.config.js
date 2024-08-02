/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Pages/**/*.html',
    './index.html',
  ],
  theme: {
    screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1440px",
    },
    fontFamily: {
      brushScript: ["Brush Script MT", "cursive"],
      blippoFantasy: ["Blippo", "Fantasy"],
      bradleyHand: ["Bradley Hand", "cursive"],
      avenirMedium: ["Avenir Medium"],
    },
    extend: {
      colors: {

        primaryBlue: "#213261",
        secondaryBlueLight: "#F5F6FA",
        primaryYellow: "#d2cb41",
        powderBlue: "#cbd9f0", // #a8c2e1 color for hover backgrounds 
        textGray: "#374151bf", // for gray small text
        textWhite: "#FFFFFF", // for main texts in white (ex: button white text)
        textDarkWhite: "#F9FAFABF", //for white-gray text on darker backgrounds
        textDarkWhiteHover: "#F9FAFA", //for white-gray hover text on darker backgrounds
        textDarkWhiteBold: "#FCFDFD", //for white-gray bigger font text on darker backgrounds
        primaryTextBlack: "#242424", //for dark header texts
      },
        
      animation: {
          'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    } 
  },
  plugins: [],
}
