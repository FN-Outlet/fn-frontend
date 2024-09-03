// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      pageSize: 10
    }
  },
  modules: [
    // ...
    '@nuxtjs/i18n',
    '@zadigetvoltaire/nuxt-gtm',
    '@dargmuesli/nuxt-cookie-control',
  ],
  cookieControl: {
    // typed module options
    barPosition: 'bottom-left',

  },
  gtm: {
    id: 'GTM-KLGWXTKH',
  },
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
    strategy: 'prefix_except_default',
    defaultLocale: 'th',
  },
  css: [
    '@/assets/css/main.scss',
  ],
  app: {
    head: {
      title: 'FN Factory Outlet | ซื้อสินค้าราคาพิเศษได้ง่ายๆ เสื้อผ้า เครื่องนอน สินค้าภายในบ้าน',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'max-image-preview:large' },
        { name: 'author', content: 'บริษัท เอฟเอ็น แฟคตอรี่ เอ๊าท์เลท จำกัด (มหาชน)' },
        { name: 'keywords', content: 'fnoutlet, factory outlet, outlet, fn, flynow, เสื้อผ้า, เครื่องนอน, สินค้าภายในบ้าน, เครื่องประดับ, ของขวัญ' },
        { name: 'description', content: 'ซื้อสินค้าราคาพิเศษได้ง่ายๆ | เสื้อผ้า เครื่องนอน สินค้าภายในบ้าน เครื่องประดับ ของขวัญ' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@fnoutlet' },
        { name: 'twitter:title', content: 'ซื้อสินค้าราคาพิเศษได้ง่ายๆ เสื้อผ้า เครื่องนอน สินค้าภายในบ้าน' },
        { name: 'fb:app_id', content: '497886640363778' },
        { name: 'og:title', content: 'ซื้อสินค้าราคาพิเศษได้ง่ายๆ เสื้อผ้า เครื่องนอน สินค้าภายในบ้าน' },
        { name: 'og:site_name', content: 'บริษัท เอฟเอ็น แฟคตอรี่ เอ๊าท์เลท จำกัด (มหาชน)' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://fnthailand.com' },
        { name: 'og:description', content: 'ซื้อสินค้าราคาพิเศษได้ง่ายๆ | เสื้อผ้า เครื่องนอน สินค้าภายในบ้าน เครื่องประดับ ของขวัญ' },
        { name: 'og:image', content: 'https://fnthailand.com/logo-fn-social.jpg' },
        { name: 'og:locale', content: 'en_US' },
        { name: 'og:locale:alternate', content: 'th_TH' },
      ],
      link: [{ rel: 'icon', type: 'image/jpg', href: '/LOGO_FN-01.jpg' }]
    }
  },
  nitro: {
    devProxy: {
      '/uploads': { target: 'http://fn-admin.27.254.144.107.nip.io/uploads', changeOrigin: true },
      '/api': { target: 'http://fn-admin.27.254.144.107.nip.io/api', changeOrigin: true },
      //'/uploads': { target: 'http://localhost:1337/uploads', changeOrigin: true },
      //'/api': { target: 'http://localhost:1337/api', changeOrigin: true },
    },
    prerender: {
      routes: [
        '/th/products', 
        '/th/branch', 
        '/th/contact', 
        '/th/online',
        '/th/career',
        '/th/directors',
        '/th/financial',
        '/th/history',
        '/th/news',
        '/th/fnsleep',
        '/th/fnapparel',
        '/th/fnhome',
        '/th/fncare',
        '/th/fntravel',
        '/th/fnsport',
        '/th/fneat',
        '/th/structure',
        '/en/products', 
        '/en/branch', 
        '/en/contact', 
        '/en/online',
        '/en/career',
        '/en/directors',
        '/en/financial',
        '/en/history',
        '/en/news',
        '/en/fnsleep',
        '/en/fnapparel',
        '/en/fnhome',
        '/en/fncare',
        '/en/fntravel',
        '/en/fnsport',
        '/en/fneat',
        '/en/structure'
      ]
    }
  }
})
