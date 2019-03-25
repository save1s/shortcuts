import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Main,
    meta: {
      title: 'Shortcuts save 1s!'
    }
  }]
})