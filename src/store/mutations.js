import * as types from './mutation-types'

export default {
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
