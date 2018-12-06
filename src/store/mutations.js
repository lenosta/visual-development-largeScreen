import * as types from './mutation-types'

export default {
  [types.SET_THEME](state, cls) {
    state.themeCls = cls
  },
  [types.SET_PAGES](state, cls) {
    state.pages = [...cls]
  },
  [types.ADD_PAGE](state, page) {
    state.pages.push(page)
  },
  [types.GET_PAGE](state, pageName) {
    var currentPages = state.pages.find(v => v.name == pageName)
    state.currentPages = currentPages
  },
  [types.UPDATE_PAGE](state, page) {
    state.pages.push(page)
  },
  [types.DEL_PAGE](state, page) {
    state.pages.push(page)
  }
}
