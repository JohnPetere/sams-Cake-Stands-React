module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend:{
        fontFamily: {
          dancingScript: ['Dancing Script', 'cursive'],
          Rampart: ["Rampart One", "cursive"]
        }
      },
      colors:{
        aeroBlue:'#D7FDF0',
        cadet: '#556F7A',
        fieryRose: '#FF5D73',
        darkPurple: '#4B2142',
        pinkLavender: '#D4AFCD',
        isabelline: '#EEE6E6',
        reallyRed: '#FF0000'
      },
      container:{
        center: true,
        padding: '2rem'
      },
    },
  },
  plugins: [],
}
