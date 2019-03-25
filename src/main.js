import Vue from 'vue'
import App from '@/App.vue'

import store from '@/store' 
import router from '@/router'
import { 
  Button, 
  Select,
  Card,
  Dialog,
  Tag,
  Menu,
  MenuItem,
  Main,
  Header,
  Footer,
  Container,
  Row,
  Col,
  Alert,
  Badge,
} from 'element-ui'; 


import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Button)
Vue.use(Select)
Vue.use(Card)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Container)
Vue.use(Row)
Vue.use(Col)
Vue.use(Alert)
Vue.use(Badge)

Vue.config.productionTip = false

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
