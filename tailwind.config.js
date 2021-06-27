module.exports = {
  // the most important thing
  mode: 'jit',

  // (the thing is, it's the path of the file that you want to purge)
  purge: ['**/*.html', "./public/scripts/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'img-hero': "url(../../assets/images/mobile/image-hero.jpg)",
        'img-hero-desktop': "url(../../assets/images/desktop/image-hero.jpg)",
      }),
      screens: {
        'xs': '320px',
        'desktop': '1440px'
      },
      fontFamily: {
        'alata': "Alata",
        'josefin': "Josefin Sans"
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '3000': '3000ms'
      },
      textColor: {
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)'
      },
      letterSpacing: {
        'very-wide': '.25em',
        'very-wider': '.5em',
        'very-widest': '1em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
