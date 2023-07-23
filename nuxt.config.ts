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
      title: 'FN Factory Outlet',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'max-image-preview:large' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  nitro: {
    devProxy: {
      '/uploads': { target: 'http://localhost:1337/uploads' },
      '/api': 'http://localhost:1337/api',
    },
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
