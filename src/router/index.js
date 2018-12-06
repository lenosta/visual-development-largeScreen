import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../pages/layout'
var rou='index.vue'
const page2 = () => import('../pages/page2/'+rou)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', //路由默认跳转
      redirect: '/page2'
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2,
    }
  ],
  linkActiveClass: 'active'
})
