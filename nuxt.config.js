module.exports = {
  // srcDir: './',
  // buildDir: './.nuxt',
  // ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'nl'
    },
    title: 'Dinnerwalks - Walk local, eat local',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'wandeling, goedkoop, cultuur, horeca, steun, korting' },
      { hid: 'description', name: 'description', content: 'Elke zaterdag en zondag culinaire wandelingen door de regio om de lokale horeca te steunen in deze moeilijke tijd.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/reset.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-scrollto", mode: "client" },
    { src: "~/plugins/vue-recaptcha-v3", mode: "client" },
    { src: '~/plugins/vue-stripe.js', ssr: false },
    { src: '~/plugins/v-calendar.js', ssr: false },
    "~/plugins/vue-sweetalert2",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ['nuxt-stripe-module', {
      publishableKey: 'pk_test_51ISUAIEK50IisyE6fKMFNgk3a2QxEn5HmoZSGfmluLG9zZaOmRGUdNSv1nN6YRMkBGFaVhXKRfPRonNtRDhY0Mw300JXpKRXkM',
      locale: 'nl'
    }],
  ],

  googleAnalytics: {
    id: 'UA-151162515-2'
  },

  axios: {
    proxy: true,
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-sweetalert2", "@vue-stripe/vue-stripe"],

    extend(config, { isDev, isClient, isServer }) {

      config.node = {
        fs: 'empty'
      }

      config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      })
      config.module.rules.push({
        test: /\.(ogg|mp3|mp4|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'static/walks',
          esModule: false
        }
      })

      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    }
  },
  server: {
    host: "0.0.0.0"
  },
  ssrLog: true,

}
