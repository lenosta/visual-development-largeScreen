import Vue from 'vue'
import Router from 'vue-router'
import pageComponent from 'pages/page2'
Vue.use(Router)


let pageRoutes = [];
let page = {};
let pagesConfig = app._options;
for (let pageName in pagesConfig) {
  page = pagesConfig[pageName];
  pageRoutes.push(
    {
      name: page.name,
      path: '/'+page.name,
      component: pageComponent
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
