import Vue from 'vue'

const messenger = {
  namespaced: true,
  state: {
    isLoadPartComplete: false,
    loadPartCount: 0,
    loadPercent: 0
  },
  mutations: {
    /**
     * @description 动态更新状态
     * @author zzg
     * @date 2019-01-03
     * @param {Object} state
     * @param {*} payload
     */
    updateState(state, payload) {
      state[payload.messageKey] = payload.value
    },

    /**
     * @description 动态注册状态
     * @author zzg
     * @date 2019-01-03
     * @param {Object} state
     * @param {*} payload
     */
    register(state, payload) {
      Vue.set(state, payload.messageKey, payload.value)
    },

    /**
     * @description 使用part组件时进行load计数
     * @author zzg
     * @date 2019-01-03
     * @param {Object} state
     * @param {any} payload
     */
    loadedPartCounter(state, payload) {
      state.loadPartCount++
    },

    /**
     * @description part组件加载百分比
     * @author zzg
     * @date 2019-01-03
     * @param {Object} state
     * @param {any} payload
     */
    loadedPartPercent(state, payload) {
      let parts = document.querySelectorAll('.common-part')
      state.loadPercent = ((state.loadPartCount / parts.length) * 100).toFixed(2)
    },

    /**
     * @description 更新全局状态
     * @author zzg
     * @date 2019-01-03
     * @param {Object} state
     */
    updateIsLoadPartComplete(state) {
      state.loadPercent == 100 && (state.isLoadPartComplete = true)
    }
  },
  actions: {},
  getters: {}
}
export default messenger
