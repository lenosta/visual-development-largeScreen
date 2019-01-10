// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import _App from '@/assets/js/app/app' //导入app.js
import part from '@/components/part/part' //引入part 组件
// import ElementUI from 'element-ui'; //使用时可放开
// import 'element-ui/lib/theme-chalk/index.css'
import 'echarts/map/js/china.js'
import store from './store'
import 'assets/css/index.scss'
Vue.prototype.$echarts = echarts
Vue.use(_App.appMixin)
// Vue.use(ElementUI);
Vue.component('part', part) //注册part 为全局组件
let vueRoot = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  appOption: { ..._App.appConfig, animate: false, stars: false, isAdapt: false } //配置参数
})
vueRoot.appOption.debug && (window.root = vueRoot)
