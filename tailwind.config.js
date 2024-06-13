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
    extend: {
        colors: {
            blueSapphire: "#175C62", // main green like color (for primary backgrounds)
            powderBlue: "#A7E8E0", // color for hover backgrounds 
            backgroundSapphire: "#25434D", // for secondary backgrounds (footers and other banners)
            textGray: "#F6F7F8", // for gray small text
            lightGreenish: "#283D47", // for small dark texts
            textWhite: "#FBFCFC", // for main texts in white (ex: button white text)
            headingGreenish: "#294650", // for dark heading texts
            borderGreen: "#87979C", // for borders
            veryLightGreen: "#F4F8F9", // for light backgrounds with a green accent
        }
    } 
  },
  plugins: [],
}
