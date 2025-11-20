export default defineNuxtConfig({
  nitro: {
    preset: 'static',
  },

  compatibilityDate: '2025-11-20',

  app: {
    head: {
      title: 'Osamu Creative – Software House & Digital Product Studio',
      meta: [
        {
          name: 'description',
          content:
            'Osamu Creative adalah software house dan digital product studio yang membantu bisnis membangun aplikasi web, mobile, dan sistem internal.',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
          sizes: '16x16',
        },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  modules: [], // i18n pakai plugin manual, jadi kosong tidak masalah
})
