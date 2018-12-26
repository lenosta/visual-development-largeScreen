<template>
  <div
    :class="['common-part',part.className]"
    ref='part'
    :id='part.id'
  >
    <slot></slot>
  </div>
</template>
<script>
import AppState from '../../assets/js/common/appState'
export default {
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init() {
      let part = this.$refs.part
      Object.assign(part.style, this.part.style)
      AppState.loadingPart()
    }
  },
  props: ['part'],
  computed: {
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
  border: 1px solid #f1f1f1;
  width: 300px;
  height: 300px;
  overflow: hidden;
  // mix-blend-mode: color-dodge;
}
</style>

