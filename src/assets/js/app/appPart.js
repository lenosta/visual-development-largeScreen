const appPart = {
  install(Vue, option) {
    Vue.mixin({
      data: function() {
        return {}
      },
      created: function() {
        let Type = (function() {
          let Type = {}
          for (
            let i = 0, type;
            (type = ['Undefined', 'Null', 'Boolean', 'Number', 'String', 'Function', 'Array', 'Object'][i++]);

          ) {
            ;(function(type) {
              Type['is' + type] = function(obj) {
                return Object.prototype.toString.call(obj) === '[object ' + type + ']'
              }
            })(type)
          }
          return Type
        })()
        this.$type = Type
        this.$getComponent = function(componentTag) {
          let component = null
          let allComp = getAllChildComp(this)
          component = allComp.filter(function(vm) {
            return vm.$options._componentTag === componentTag
          })
          if (component.length == 0) {
            console.warn('${componentTag} 组件不存在')
            return
          }
          {
            return component
          }
          function getAllChildComp(instance) {
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
                allComp = allComp.concat(getAllChildComp(child[i].$children))
              }
            }
            return allComp
          }
        }
      }
    })
  }
}
export default appPart
