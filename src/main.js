import Vue from 'vue'
import App from '@/App.vue'

import store from '@/store' 
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(fas)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(VueRouter)
const DEFAULT_TITLE = 'Shortcut save 1s!';
router.afterEach((to) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});
const vue = new Vue({
  router,
  store,
  render: h => h(App)
})

vue.$mount('#app')
