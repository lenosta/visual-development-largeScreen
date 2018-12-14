import appConfig from 'appConfig'

let app = {
  // config: appConfig
  _components: {
    pages: appConfig.pages, // vue template
    parts: appConfig.parts
  },
  _options: appConfig.options,
  pages: [], // pages instance
  getPage(name) {}
}
window.app = app
export default app
