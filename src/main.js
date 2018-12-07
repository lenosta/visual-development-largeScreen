// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import app from './assets/js/app.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import * as TweenMax from "gsap/umd/TweenMax";
import store from './store'
import 'assets/css/index.scss'
Vue.prototype.$chartColor = ['#08a7de', '#8abe32', '#de6f00', '#d34d4d']
Vue.prototype.$echarts = echarts

// Vue.prototype.TweenMax = TweenMax

/* eslint-disable no-new */
  let newvue = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })





  
