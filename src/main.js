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
Vue.prototype.created = () => {
  console.log('mixin created.')
};
// Vue.prototype.TweenMax = TweenMax
// $options.__file
// _scopeId
// name
/* eslint-disable no-new */
window.vueRoot = new Vue({
  el: '#app',
  // mixins:[myMixin],
  // extends: myExtend,
  router,
  store,
  template: '<App/>',
  components: { App }
})

for(let pageTemplate in app._components.pages)
{
  findNodes(vueRoot.$children, pageTemplate._scopeId, app.pages)
}


function findNodes(nodes, id, findArr) {
  nodes.forEach((node) => {
    if (node.$options._scopeId == id) {
      findArr.push(node);
    }
    findNodes(node.$children, id, findArr)
  });
}




//app.getPage('page2').parts['ss'].type==''




