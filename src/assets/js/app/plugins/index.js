import setConfig from './setConfig'
import getComponent from './getComponent'
import baseComponents from '../baseComponents'
export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          appConfig: {} // 组件混入选项
        }
      },
      created() {
        // 获取当前组件配置项
        this._debugGetFinalOptions()
      },
      methods: {
        ...setConfig,
        ...getComponent
      },
      components: {
        ...baseComponents
      }
    })
  }
}
