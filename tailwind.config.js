/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        gold: '#fda214',
        lightGold: '#ffb84a',
        lightGray: "#f2f2f2",
        mediumGray: "#bcced9",
        darkGray: "#7191a5",
        lightBlue: "#6395b8",
        mediumBlue: "#304859",
        darkBlue: "#152938",
        white: "#fcfcfc"
        
      },
      fontFamily: {
        'sans': "Outfit"
      }
    },
  },
  plugins: [],
}
