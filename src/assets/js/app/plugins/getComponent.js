import Type from '../utils/isType'
export default {
  /**
   * @description 依据标签名获取vue实例
   * @author zzg
   * @date 2019-01-03
   * @param {String} componentTag
   * @returns {Array} 返回实例数组
   */
  $getComponent(componentTag) {
    let components = []
    let allComp = this._getAllChildComp(this)
    components = allComp.filter(vm => {
      return vm.$options._componentTag === componentTag
    })
    if (components.length == 0) {
      console.warn(`${componentTag} 组件不存在`)
      return
    }
    return components
  },
  /**
   * @description 获取当前vue实例的所有子实例
   * @author zzg
   * @date 2019-01-03
   * @param {Object} instance
   * @returns {Array}  返回数组
   */
  _getAllChildComp(instance) {
    let allComp = [],
      child
    if (Type.isObject(instance)) {
      child = instance.$children
    } else if (Type.isArray(instance)) {
      child = instance
    }
    for (let i = 0; i < child.length; i++) {
      allComp.push(child[i])
      if (child[i].$children.length > 0) {
        allComp = allComp.concat(this._getAllChildComp(child[i].$children))
      }
    }
    return allComp
  }
}
