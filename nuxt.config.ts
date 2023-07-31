// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@nuxtjs/i18n',
  ],
  i18n: {
    detectBrowserLanguage: {
      // If enabled, a cookie is set once a user has been redirected to his
      // preferred language to prevent subsequent redirections
      // Set to false to redirect every time
      useCookie: true,
      // Cookie name
      cookieKey: 'i18n_redirected',
      // Set to always redirect to value stored in the cookie, not just once
      alwaysRedirect: false,
      // If no locale for the browsers locale is a match, use this one as a fallback
      fallbackLocale: 'th'
    },
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
      //'/uploads': { target: 'http://fn-admin.27.254.144.107.nip.io/uploads', changeOrigin: true },
      //'/api': { target: 'http://fn-admin.27.254.144.107.nip.io/api', changeOrigin: true },
      '/uploads': { target: 'http://localhost:1337/uploads', changeOrigin: true },
      '/api': { target: 'http://localhost:1337/api', changeOrigin: true },
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
