/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1024px',
        },
      },

      fontFamily: {
        barlow: '"Barlow Condensed", sans-serif',
      },
      fontSize: {
        mainHeading: '5.8rem',
        secondaryHeading: '3.1rem',
        subHeading: '2.6rem',
        miniHeading: '0.9rem',
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
        accent300: '#13424A',
      },
      backgroundImage: {
        primaryLinearRight: 'linear-gradient(90deg, #060 0%, #6DC81B 100%)',
        primaryLinearTop:
          ' linear-gradient(17deg, #060 8.18%, #6DC81B 91.82%), #107404',
        primaryLinearBottom:
          'linear-gradient(205deg, #060 -38.75%, #6DC81B 138.75%), #57B416',
        hover: 'url(hover.png)',
        serviceCard: 'url(banner_2.png)',
      },
    },
  },
  plugins: [],
};
