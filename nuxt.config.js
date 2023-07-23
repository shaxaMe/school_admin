export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dashboard",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
  },
  router: {
    // middleware: "login",
    extendRoutes(routes, resolve) {
      // Check if the code is running on the client-side
      setTimeout(()=>{
        if (process.client) {
          // Access LocalStorage and modify routes accordingly
          const isLoggedIn = JSON.parse(localStorage.DENT_UZ);
          if (isLoggedIn.accaunt.loginIn ==false) {
            // Modify the routes based on your condition
            // For example, if the user is logged in, redirect to a private page
            routes.push({
              name: 'login',
              path: '/login',
              component: resolve(__dirname, 'pages/login.vue')
            });
          }
        }
      })
    }
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~assets/css/main.scss",
    '@/assets/css/tailwind.css',
    "~assets/css/helper.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui",'~plugins/axios.js',{src: '~plugins/persistedstate.js', mode: 'client'},],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  axios:{
    baseURL:"test/test",
    proxy:false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    vendor:['axios'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  // buildModules: ['@nuxtjs/tailwindcss']
};
