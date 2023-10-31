export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/plausible',
    '@nuxtjs/color-mode',
  ]
})
