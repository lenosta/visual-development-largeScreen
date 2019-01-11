// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import { plugins } from '@/assets/js/app' //导入插件
// import ElementUI from 'element-ui'; //使用时可放开
// import 'element-ui/lib/theme-chalk/index.css'
import 'echarts/map/js/china.js'
import store from './store'
import 'assets/css/index.scss'
Vue.prototype.$echarts = echarts
Vue.use(plugins)
// Vue.use(ElementUI);
let vueRoot = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  appConfig: { animate: false, stars: false, isAdapt: false } //配置参数
})
window.root = vueRoot
// vueRoot.appConfig.debug && (window.root = vueRoot)
