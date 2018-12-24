import Vue from 'vue'
import Router from 'vue-router'
import page2 from 'pages/page2'
Vue.use(Router)

// let pageRoutes = [];
// let page = {};
// let pagesConfig = app._options;
// for (let pageName in pagesConfig) {
//   page = pagesConfig[pageName];
//   pageRoutes.push(
//     {
//       name: page.name,
//       path: '/'+page.name,
//       component: app._components.pages[page.name]
//     }
//   )
// }
export default new Router({
  routes: [
    {
      path: '/', //路由默认跳转
      redirect: '/page2'
    },
    {
      name: 'page2',
      path: '/page2',
      component: page2
    }
  ],
  linkActiveClass: 'router-active'
})
