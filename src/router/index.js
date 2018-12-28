import Vue from 'vue'
import Router from 'vue-router'
import demo1 from 'pages/demo1'
import demo2 from 'pages/demo2'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', //路由默认跳转
      redirect: 'demo1'
    },
    {
      name: 'demo1',
      path: '/demo1',
      component: demo1
    },
    {
      name: 'demo2',
      path: '/demo2',
      component: demo2
    }
  ],
  linkActiveClass: 'router-active'
})
