<template>
  <div
    :class="['part',part.className]"
    ref='part'
    :id='part.id'
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let part = this.$refs.part
      Object.assign(part.style, this.part.style)
    }
  },
  props: ['part']
}
</script>
<style lang="scss" scoped>
.part {
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

