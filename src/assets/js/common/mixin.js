
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
