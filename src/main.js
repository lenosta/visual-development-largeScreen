// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import 'echarts/map/js/china.js'
// import ElementUI from 'element-ui'
// import * as D3 from './components/force/d3v4'
import * as TweenMax from "gsap/umd/TweenMax";
import store from './store'
import 'assets/css/index.scss'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$echarts = echarts
Vue.prototype.TweenMax = TweenMax
Vue.config.productionTip = false
Vue.prototype.$chartColor = ['#08a7de', '#8abe32', '#de6f00', '#d34d4d']
// Vue.use(ElementUI)
Vue.filter('filterNumber', function(value) {
  if (typeof value != 'number') return ''
  value = value.toFixed(0)
  return value
})
/* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })





  
