export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rate',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,800' }
    ]
  },
  image: {
    dir: '@/assets/images'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.css',
    '@/assets/css/media.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    {src: 'plugins/owl.js', ssr: false}, // Only works on client side
    {src: 'plugins/vue-apexchart.js', ssr : false},
    {src: 'plugins/vue-datepicker-ui.js', ssr : false},
    {src: 'plugins/vue2-daterange-picker.js', ssr : false},
    {src: 'plugins/yandex-map.js', mode: 'client'},
    {src: 'plugins/lodash.js'},
    '@plugins/v-mask.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],
  build: {
    vendor : [
       'vue-apexchart'
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    "vue-toastification/nuxt",
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  toast: {
    timeout: 2000,
    closeOnClick: false
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API,
    headers: {
      common: {
        Token: process.env.TOKEN
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    localStorage: false,
    cookie: {
      options: {
        expires: 7
      }
    },
    redirect: {
      login: '/user/login',
      logout: '/',
      callback: '/user/login',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          maxAge: 60 * 60 * 24 * 7,
        },
        endpoints: {
          login: { url: "/login", method: "post" },
          logout: { url: "/logout", method: "post" },
          user: false
        }
      }
    },
  },
  router: {
   middleware: ['auth']
  },
}
