<template>
  <div
    :class="['common-part',part?part.className:'']"
    ref='part'
    :id='part?part.id:""'
  >
    <slot></slot>
  </div>
</template>
<script>
import { state } from '@/assets/js/app'
export default {
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  watch: {
    part: {
      handler: function(val, oldVal) {
        Object.assign(this.$refs.part.style, this.part.style)
      },
      deep: true //增加deep 观察对象的子对象变化
    }
  },
  methods: {
    init() {
      let part = this.$refs.part
      Object.assign(part.style, this.part ? this.part.style : {})
      state.loadingPart()
    },
    setStyle(style) {
      Object.assign(this.$refs.part.style, typeof style === 'object' ? style : {})
    }
  },
  props: {
    part: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
.common-part {
  position: absolute;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 5px;
  // border: 1px solid #f1f1f1;
  background: #012b607d;
  width: 300px;
  height: 300px;
  overflow: hidden;
  // mix-blend-mode: color-dodge;
}
</style>

