// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import en from './translation/en'
Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en
  }
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
