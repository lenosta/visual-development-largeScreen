import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


let pageRoutes = [];
let page = {};
let pagesConfig = app.config.pagesConfig;
for (let pageName in pagesConfig) {
  page = pagesConfig[pageName];
  pageRoutes.push(
    {
      name: page.name,
      path: '/'+page.name,
      component: app.config.pages[page.name]
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
