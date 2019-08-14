import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Regist from './page/Regist.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Regist
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { path: '/regist', name: 'regist', component: Regist }
  ]
})
