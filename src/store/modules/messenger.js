import Vue from 'vue'

const messenger = {
  namespaced: true,
  state: {
    isLoadPartComplete: false,
    loadPartCount: 0,
    loadPercent: 0
  },
  mutations: {
    updateState(state, payload) {
      state[payload.messageKey] = payload.value
    },
    register(state, payload) {
      Vue.set(state, payload.messageKey, payload.value)
    },
    loadedPartCounter(state, payload) {
      state.loadPartCount++
    },
    loadedPartPercent(state, payload) {
      let parts = document.querySelectorAll('.common-part')
      state.loadPercent = ((state.loadPartCount / parts.length) * 100).toFixed(2)
    },
    updateIsLoadPartComplete(state) {
      state.loadPercent == 100 && (state.isLoadPartComplete = true)
    }
  },
  actions: {},
  getters: {}
}
export default messenger
