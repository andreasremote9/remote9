const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      gray: {
        default: '#EEEEEE',
        dark: '#5D5D5C',
        darker: '#414040',
      },
      green: {
        DEFAULT: '#92BDB8',
        dark: '#2A5C5C',
      },
      red: {
        default: '#F25F5C',
        dark: '#C15450',
        darker: '#8B4440',
      },
      white: '#FFFFFF',
      black: '#000000',
      current: 'currentColor',
      transparent: 'transparent',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: theme => ({
        'hero-section': "url('~/assets/svg/RemoteNine-BG-Side.svg')",
       }),

    },
  },
  variants: {
    backgroundColor: ['active', 'hover'],
    textColor: ['active', 'hover'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
