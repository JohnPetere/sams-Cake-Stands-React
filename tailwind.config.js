module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
        fontFamily: {
          dancingScript: ['"Dancing Script"'],
          rampart: ['"Rampart One"']
        },
        colors:{
          aeroBlue:'#D7FDF0',
          cadet: '#556F7A',
          fieryRose: '#FF5D73',
          darkPurple: '#4B2142',
          pinkLavender: '#D4AFCD',
          isabelline: '#EEE6E6',
          reallyRed: '#FF0000',
          backgroundGreg: '#CBD5E1'
        },
        container:{
          center: true,
          padding: '2rem'
        }
      },    
  },
  plugins: [],
}
