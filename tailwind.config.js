module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px'
      },
      colors: {
        'hoverspt': '#18d760',
        'purple-main': '#2d46b9',
        'green-main': '#1ed760',
        'red-main': '#ff4632'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('/07-clone-spotify/src/assets/bursts.svg')",
        'spotify-theme-mobile': "url('/07-clone-spotify/src/assets/bursts-mobile.svg')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
