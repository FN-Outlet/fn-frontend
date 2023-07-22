// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@nuxtjs/i18n',
  ],
  i18n: {
    langDir: './locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'th', iso: 'th-th', file: 'th.json' },
    ],
    strategy: 'prefix',
    defaultLocale: 'th',
  },
  css: [
    '@/assets/css/main.scss',
  ],
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/products-services', 
        '/branch', 
        '/contact', 
        '/online',
        '/career',
        '/directors',
        '/financial',
        '/history',
        '/news',
        '/fnsleep',
        '/fnapparel',
        '/fnhome',
        '/fncare',
        '/fntravel',
        '/fnsport',
        '/fneat',
        '/structure'
      ]
    }
  }
})
