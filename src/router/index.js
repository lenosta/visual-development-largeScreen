import Vue from 'vue'
import Router from 'vue-router'
import appConfig from '../appConfig'
console.log(Vue)
Vue.use(Router)


let pageRoutes = [];
let page = {};
for (let pageName in pagesConfig) {
  page = pagesConfig[pageName];
  pageRoutes.push(
    {
      name: page.name,
      path: '/'+page.name,
      component: pages[page.name]
    }
  )
}


export default new Router({
  routes: [
    {
      path: '*', //路由默认跳转
      redirect: '/page2'
    },
     ...pageRoutes
  ],
  linkActiveClass: 'active'
})
