// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import app from './assets/js/App.js'
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

let vueRoot = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
app.init(vueRoot)

if(app.config.debug)
  window.vueRoot = vueRoot
//window.app = new AppVis(vueRoot)

// for(let pageTemplate in app._components.pages)
// {
//   let id = app._components.pages[pageTemplate]._scopeId;
//   findNodes(vueRoot.$children, id, app.pages)
// }


// function findNodes(nodes, id, findArr) {
//   let isOk=false
//   nodes.forEach((node) => {
//     if (node.$options._scopeId == id) {
//       findArr.push(node);
//       isOk=true;
//       return;
//     }
    
//     if(!isOk)
//       findNodes(node.$children, id, findArr)
//   });
// }




//app.getPage('page2').parts['ss'].type==''




