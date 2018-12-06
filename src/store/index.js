import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
//每次通过mutation修改state的时候console.log
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
//如果是npm run dev的时候就是dev环境
//如果npm run build时候就是production环境
//检测在开发环境下修改state是不是通过mutation
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
