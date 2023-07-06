// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true, buildModules: [
    // ...
    '@nuxtjs/tailwindcss',
  ] },
  css: [
    '@/assets/css/main.css',
  ],
  
})
