import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../pages/layout'
import page1 from 'pages/page1/page1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', //路由默认跳转
      redirect: '/'
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: 'page1',
      children: [
        {
          path: 'page1',
          name: 'page1',
          component: page1
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})
