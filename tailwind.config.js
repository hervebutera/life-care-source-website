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
            blueSapphire: "#175C62", // main green like color (for primary backgrounds)
            powderBlue: "#A7E8E0", // color for hover backgrounds 
            backgroundSapphire: "#25434D", // for secondary backgrounds (footers and other banners)
            textGray: "#374151bf", // for gray small text
            lightGreenish: "#283D47", // for small dark texts
            textWhite: "#FBFCFC", // for main texts in white (ex: button white text)
            headingGreenish: "#294650", // for dark heading texts
            borderGreen: "#87979C", // for borders
            veryLightGreen: "#F4F8F9", // for light backgrounds with a green accent
            hoverSapphire: "#175c62c4", // for cta buttons hover
            textDarkWhite: "#F9FAFABF", //for white-gray text on darker backgrounds
            textDarkWhiteHover: "#F9FAFA", //for white-gray hover text on darker backgrounds
            textDarkWhiteBold: "#FCFDFD", //for white-gray bigger font text on darker backgroundsT
            grayText: "#8E8E9D",
        },
      animation: {
          'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
        }
    } 
  },
  plugins: [],
}
