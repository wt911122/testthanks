import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { contents } from './i18n';
import './normalize.css'
import './app.css'
import './share.less'
import { resolveContent } from './util';
Vue.config.productionTip = false
Vue.mixin({
    methods: {
        resolveContent,
    }
});
window.locale = 'ja';
document.title = contents[window.locale].header.content;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
