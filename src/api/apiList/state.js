import xhr from '../api'
// 获取列表
const getList = params => {
  return xhr.get('static/json/state/warn.json', { params })
}
// 添加表单
const testPost = params => {
  return xhr.post('state/warn.json', params)
}
const getTreeData = params => {
  return xhr.get('static/json/treeData.json', { params })
}
const getConfigData = params => {
  return xhr.get('static/json/page.config.json', { params })
}
const getJson = (url, params) => {
  return xhr.get(process.env.NODE_ENV !== 'production' ? url : 'visual-development-largeScreen/' + url, params)
}
const testMock = (url, params) => {
  return xhr.get('test/list', params)
}
export { getList, testPost, getTreeData, getConfigData, getJson, testMock }
