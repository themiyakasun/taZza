/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: '1205px',
        },
      },

      fontFamily: {
        barlow: '"Barlow Condensed", sans-serif',
      },
      fontSize: {
        mainHeading: '7.8rem',
        secondaryHeading: '4.1rem',
        subHeading: '3.6rem',
        miniHeading: '1.9rem',
      },
      colors: {
        primary: '#03262C',
        secondary: '#60CD12',
        accent100: '#3D4555',
      },
      backgroundColor: {
        primary: '#03262C',
        secondary: '#60CD12',
        accent100: '#3D4555',
        accent200: '#FF7258',
      },
      backgroundImage: {
        primaryLinearRight: 'linear-gradient(90deg, #060 0%, #6DC81B 100%)',
        primaryLinearTop:
          ' linear-gradient(17deg, #060 8.18%, #6DC81B 91.82%), #107404',
        primaryLinearBottom:
          'linear-gradient(205deg, #060 -38.75%, #6DC81B 138.75%), #57B416',
        hover: 'url(../assets/hover.png)',
      },
    },
  },
  plugins: [],
};
