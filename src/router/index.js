import Vue from 'vue'
import Router from 'vue-router'
import demo1 from 'pages/demo1'
import demo2 from 'pages/demo2'
import demo3 from 'pages/demo3'
import demo4 from 'pages/demo4'
import baseLayout from 'pages/baseLayout'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', //路由默认跳转
      redirect: 'baseLayout'
    },
    {
      name: 'baseLayout',
      path: '/baseLayout',
      component: baseLayout,
      menuIcon: 'icon-huifumorenbuju',
      isMenu: true,
      meta:{
        title:'基础布局'
      }
    },
    {
      name: 'demo1',
      path: '/demo1',
      component: demo1,
      menuIcon: 'icon-neironggengxin',
      isMenu: true,
      meta:{
        title:'内容呈现'
      }
    },
    {
      name: 'demo2',
      path: '/demo2',
      component: demo2,
      menuIcon: 'icon-tongxin',
      isMenu: true,
      meta:{
        title:'通信'
      }
    },
    {
      name: 'demo3',
      path: '/demo3',
      component: demo3,
      menuIcon: 'icon-jiaohuyanshidonghua',
      isMenu: true,
      meta:{
        title:'加入动画'
      }
    },
    {
      name: 'demo4',
      path: '/demo4',
      component: demo4,
      menuIcon: 'icon-peizhi',
      isMenu: true,
      meta:{
        title:'配置'
      }
    }
  ]
  // linkActiveClass: 'router-active'
})
