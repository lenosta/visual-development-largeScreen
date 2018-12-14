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
  components: {
    App
  }
})
var flag = false;

for (let pageTemplate in app._components.pages) {
  findNodes(vueRoot.$children, app._components.pages[pageTemplate]._scopeId, app.pages)
}

function findNodes(nodes, id, findArr) {

  if(flag){
    return false;
  }
  nodes.forEach((node) => {
    if (node.$options._scopeId == id) {
      findArr.push(node);
      flag = true;
      return false;
    }else {
      findNodes(node.$children, id, findArr)
    }

  });


}
// console.log(vueRoot.$route.matched[0].instances.default.$options)



