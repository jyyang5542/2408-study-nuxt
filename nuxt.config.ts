// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { name: 'description', content: 'This is my Nuxt app.' },
        { name: 'keywords', content: 'nuxt, vue, javascript' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  // css: ['~/assets/scss/style.scss'],
});
