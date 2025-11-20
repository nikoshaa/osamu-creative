import { createI18n } from 'vue-i18n'
import en from '../i18n/locales/en.json'
import id from '../i18n/locales/id.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'id',          
    fallbackLocale: 'en',
    messages: {
      en,
      id
    }
  })

  nuxtApp.vueApp.use(i18n)
})