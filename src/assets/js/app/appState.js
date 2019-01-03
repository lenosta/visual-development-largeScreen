/*eslint-disable*/
import store from '@/store'
import { mapState } from 'vuex'
export default class appState {
  /**
   * 注册一个state
   * @param {string} messageKey 需要注册的state的key
   * @param {any} value state详细信息 可选参数
   */
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
  /**
   *
   * @param {string} configKey
   */
  static getConfig(configKey) {
    return AppState.getState('config')[configKey]
  }
  /**
   * 获取state
   * @param {String} messageKey 想要获取的state的key
   * @return {Array} 返回计算属性
   */
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
  /**
   * 更新state
   * @param {string} messageKey 需要更新的state的key
   * @param {any} value 新值
   */
  static updateState(messageKey, value) {
    if (!store.state.messenger.hasOwnProperty(messageKey)) {
      return
    }
    store.commit('messenger/updateState', {
      messageKey,
      value
    })
  }

  /**
   * @description 更新IsLoadPartComplete状态
   * @author zzg
   * @date 2019-01-03
   * @static
   * @memberof appState
   */
  static loadingPart() {
    store.commit('messenger/loadedPartCounter')
    store.commit('messenger/loadedPartPercent')
    store.commit('messenger/updateIsLoadPartComplete')
  }
  /**
   * 注册新的store模块
   * @param {string} moduleName 注册新的store模块名称
   * @param {object} state stroe对象
   */
  static rigistNewModule(
    moduleName,
    state = {
      state() {
        return {}
      },
      mutations: {},
      actions: {}
    }
  ) {
    store.registerModule(moduleName, state)
  }
}
