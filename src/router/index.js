import Vue from 'vue'
import Router from 'vue-router'
import showContent from 'pages/showContent'
import animationAndCommunication from 'pages/animationAndCommunication'
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
      meta: {
        title: '基础布局'
      }
    },
    {
      name: 'showContent',
      path: '/showContent',
      component: showContent,
      menuIcon: 'icon-neironggengxin',
      isMenu: true,
      meta: {
        title: '内容呈现'
      }
    },
    {
      name: 'animationAndCommunication',
      path: '/animationAndCommunication',
      component: animationAndCommunication,
      menuIcon: 'icon-jiaohuyanshidonghua',
      isMenu: true,
      meta: {
        title: '动画&通信'
      }
    },
    {
      name: 'configuration',
      path: '/configuration',
      component: configuration,
      menuIcon: 'icon-peizhi',
      isMenu: true,
      meta: {
        title: '配置'
      }
    }
  ]
  // linkActiveClass: 'router-active'
})
