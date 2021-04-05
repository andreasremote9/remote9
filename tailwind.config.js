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
        DEFAULT: '#F25F5C',
        dark: '#C15450',
        darker: '#8B4440',
      },
      blue: '#0B2C38',
      yellow: '#F4C24F',
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
        'main': "url('~/assets/svg/bg-9-half-rx-dg-gr.svg')",
       }),

    },
  },
  variants: {
    backgroundColor: ['active', 'hover'],
    backgroundImage: ['active', 'hover'],
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
