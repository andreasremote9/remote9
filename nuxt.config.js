export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Remote 9',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The best trips for remote workers',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
  },
  /*
   ** Global CSS
   */
   css: [
    'plyr/dist/plyr.css', // For video/audio players
    '~/assets/css/plyr-ovrwrt.css',
   ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vue-plyr' }
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/aceforth/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // Doc: https://github.com/Developmint/nuxt-svg-loader
    'nuxt-svg-loader',
  ],

  optimizedImages: {
    optimizeImages: true,
  },

  pwa: {
    manifest: {
      name: 'Remote 9',
      short_name: 'Remote 9',
      theme_color: '#92BDB8',
      background_color: '#92BDB8',
      display: 'browser',
    },
    meta: {
      name: 'Remote 9',
      description: 'The best trips for remote workers',
      author: 'Luca Vavassori',
      theme_color: '#2A5C5C',
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  render: {
    resourceHints: false,
  },
}