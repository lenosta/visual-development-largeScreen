/**
 *
 * 1.混入配置项appConfig:{}
 */
import urlArg from '../utils/urlArg'
import config from '../config'
import fps from '../utils/fps'
export default {
  /**
   * @description 获取最终的配置选项
   * @author zzg
   * @date 2019-01-03
   */
  _debugGetFinalOptions() {
    // 预置配置项
    let appConfigionsLev0 = config
    // 组件debug配置
    let optionList = []
    let that = this
    // 递归实例的$options 获取配置
    function getComponentOption(that) {
      if (that.$options.parent) {
        if (that.$options.appConfig) {
          optionList.push(that.$options.appConfig)
        }
        getComponentOption(that.$options.parent)
      } else if (!that.$options.parent) {
        if (that.$options.appConfig) {
          optionList.push(that.$options.appConfig)
        }
      }
    }

    // 调用获取配置项
    getComponentOption(that)
    let opt = {}
    for (let i = optionList.length - 1; i >= 0; i--) {
      opt = Object.assign(opt, optionList[i])
    }
    let appConfigionsLev1 = opt
    // url参数
    let appConfigionsLev2 = urlArg()
    //运行时判断mock,debug 模式是否开启
    const runtimeConfig = Object.assign({}, appConfigionsLev0, appConfigionsLev2)
    if (runtimeConfig.isMock === true) {
      let mock = require('@/mock')
    }
    if (runtimeConfig.debug === true) {
      fps._debugOpenPageStatsMonitor()
    } else {
      fps._debugCanclePageStatsMonitor()
    }
    // 获得一个最终的组件配置选项
    let finaleOption = Object.assign({}, appConfigionsLev0, appConfigionsLev1, appConfigionsLev2,runtimeConfig)
    // 混入data
    this.appConfig = finaleOption
  }
}
