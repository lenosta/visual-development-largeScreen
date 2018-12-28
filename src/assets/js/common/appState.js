/*eslint-disable*/
import store from '@/store'
import {
  mapState
} from 'vuex'
export default class AppState {
  // todo 判断是否存在 key
  static regist(messageKey, value) {
    if (!messageKey || typeof messageKey !== 'string' || !messageKey.trim()) {
      console.warn('请传入需要注册的KEY,且必须为非空string')
      return
    }
    if (store.state.messenger[messageKey]) {
      console.warn(`${messageKey}已经被注册！`)
      return
    }
    store.commit('messenger/register', {
      messageKey,
      value
    })
  }
  static getConfig(configKey) {
    return AppState.getState('config')[configKey]
  }
  // 获取状态
  static getState(messageKey) {
    if (typeof messageKey === 'string') {
      return mapState({
        [messageKey]: state => state.messenger[messageKey]
      })
    } else if (Array.isArray(messageKey)) {
      let stateKey = {}
      messageKey.forEach((item, index) => {
        stateKey[item] = state => state.messenger[item]
      })
      return mapState(stateKey)
    }
  }
// 更新状态
  static updateState(messageKey, value) {
    if (!store.state.messenger.hasOwnProperty(messageKey)) {
      return
    }
    store.commit('messenger/updateState', {
      messageKey,
      value
    })
  }
//更新IsLoadPartComplete状态
  static loadingPart() {
    store.commit('messenger/loadedPartCounter')
    store.commit('messenger/loadedPartPercent')
    store.commit('messenger/updateIsLoadPartComplete')
  }
  static rigistNewModule(moduleName, state = {
    state() {
      return {}
    },
    mutations: {},
    actions: {}
  }) {
    store.registerModule(moduleName, state)
  }
}
