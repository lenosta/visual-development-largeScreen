import Vue from 'vue'
import Router from 'vue-router'
import showContent from 'pages/showContent'
import communication from 'pages/communication'
import addAnimation from 'pages/addAnimation'
import configuration from 'pages/configuration'
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
      name: 'showContent',
      path: '/showContent',
      component: showContent,
      menuIcon: 'icon-neironggengxin',
      isMenu: true,
      meta:{
        title:'内容呈现'
      }
    },
    {
      name: 'communication',
      path: '/communication',
      component: communication,
      menuIcon: 'icon-tongxin',
      isMenu: true,
      meta:{
        title:'通信'
      }
    },
    {
      name: 'addAnimation',
      path: '/addAnimation',
      component: addAnimation,
      menuIcon: 'icon-jiaohuyanshidonghua',
      isMenu: true,
      meta:{
        title:'加入动画'
      }
    },
    {
      name: 'configuration',
      path: '/configuration',
      component: configuration,
      menuIcon: 'icon-peizhi',
      isMenu: true,
      meta:{
        title:'配置'
      }
    }
  ]
  // linkActiveClass: 'router-active'
})
