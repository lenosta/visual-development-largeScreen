/*eslint-disable*/
import store from '@/store'
import { mapState } from 'vuex'
export default  {
  /**
   * @description 注册一个state
   * @author zzg
   * @date 2019-01-03
   * @param {String} messageKey  需要注册的state的key
   * @param {any} value state详细信息 可选参数
   */
  regist(messageKey, value) {
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
  },
  /**
   * @description 获取state
   * @author zzg
   * @date 2019-01-03
   * @param {String} messageKey
   * @returns {Array} 返回计算属性
   */
  getState(messageKey) {
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
  },
  /**
   * @description 更新state
   * @author zzg
   * @date 2019-01-03
   * @param {String} 需要更新的state的key
   * @param {any} value 新值
   */
  updateState(messageKey, value) {
    if (!store.state.messenger.hasOwnProperty(messageKey)) {
      return
    }
    store.commit('messenger/updateState', {
      messageKey,
      value
    })
  },

  /**
   * @description 更新isLoadPartComplete状态
   * @author zzg
   * @date 2019-01-03
   */
  loadingPart() {
    store.commit('messenger/loadedPartCounter')
    store.commit('messenger/loadedPartPercent')
    store.commit('messenger/updateIsLoadPartComplete')
  },

  /**
   * @description 注册新的store模块
   * @author zzg
   * @date 2019-01-03
   * @param {String} moduleName 注册新的store模块名称
   * @param {Object} state  stroe对象
   * @returns
   */
  rigistNewModule(
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
