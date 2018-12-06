/**
 * Created by 九次方前端研发部-陈胜<chensheng@jusfoun.com> on 2018-01-19 08:47:14
 */

export const echartsMixin = {
  mounted() {
    setTimeout(() => {
      window.addEventListener('resize', this._resizeHanlder)
    }, 21)
  },
  methods: {
    _resizeHanlder() {
      throw new Error('_resizeHanlder must be implement in current component')
    },
    _destroyHandler() {
      throw new Error('you must destroy your echatrs instance in current component!')
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._resizeHanlder)
    this._destroyHandler()
  }
}
