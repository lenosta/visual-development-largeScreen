import appConfig from 'appConfig'

let app = {
  // config: appConfig
}
Object.defineProperty(app, '__components', {
  value: { parts: appConfig.parts, pages: appConfig.pages },
  writable: false,
  enumerable: true,
  configurable: false
})
Object.defineProperty(app, '__options', {
  value: appConfig.options,
  writable: false,
  enumerable: true,
  configurable: false
})
app.getComponents=function(){
  return this.__components
}
window.app = app
export default app
