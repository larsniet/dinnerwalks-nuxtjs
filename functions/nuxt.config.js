module.exports = {
  srcDir: '../src',
  buildDir: './.nuxt',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dinnerwalks',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
    // '~/plugins/firebase.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-sweetalert2',
    '@nuxtjs/firebase',
  ],

  /*
  ** Firebase Configuration
  */
  firebase: {
    config: {
      apiKey: "AIzaSyDjC4XeY71EC-GKnRjMxdgiUx9gEhBck0Q",
      authDomain: "dinnerwalks-7fc99.firebaseapp.com",
      databaseURL: "https://dinnerwalks-7fc99-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "dinnerwalks-7fc99",
      storageBucket: "dinnerwalks-7fc99.appspot.com",
      messagingSenderId: "544059530833",
      appId: "1:544059530833:web:469927f89ecdb6e2d9e270",
      measurementId: "G-9PMVBRBWD5"
    },
    services: {
      auth: true,
      functions: true,
      firestore: true,
      database: true
    },
    onFirebaseHosting: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient, isServer }) {

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

      if (isServer) {
        config.externals = {
          '@firebase/app': 'commonjs @firebase/app',
          '@firebase/firestore': 'commonjs @firebase/firestore',
          '@firebase/database': 'commonjs @firebase/database',
          '@firebase/auth': 'commonjs @firebase/auth',
          '@firebase/functions': 'commonjs @firebase/functions',
          '@firebase/analytics': 'commonjs @firebase/analytics',
        }
      }
    }
  },
  server: {
    host: "0.0.0.0"
  },
  ssrLog: true,

}
