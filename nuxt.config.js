module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "BS - Nuxt - Boilerplate",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#35cc62" },
  /*
  ** Build configuration
  */
  build: {
    postCss: [
      /* eslint-disable global-require */
      require("autoprefixer")({
        browsers: ["last 3 versions", "iOS >= 8", "Safari >= 8", "ie >= 9"],
        cascade: false,
        flexbox: "no-2009"
      })
      /* eslint-enable global-require */
    ],
    vendor: ["axios", "vue-awesome-swiper", "swiper/dist/css/swiper.css"]
  },
  modules: [
    ["nuxt-sass-resources-loader", "@/assets/sass/_variables.sass"],
    "@nuxtjs/dotenv"
  ],
  css: ["@/assets/sass/main.sass"],
  plugins: [
    {
      src: "~/plugins/ksvuescrollmagic",
      ssr: false
    },
    {
      src: "~/plugins/axios"
    }
  ]
};
