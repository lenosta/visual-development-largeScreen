import * as types from './mutation-types'

export default {
  [types.SET_THEME](state, cls) {
    state.themeCls = cls
  },
  [types.SET_PAGES](state, cls) {
    state.pages = [...cls]
  }
}
