<template>
  <div :class="['box-b','className']" ref='box' :initChart="contentType">
    <chart-box :content-type=contentType></chart-box>
  </div>
</template>
<script>
import chartBox from '../chartBox/chart-box.vue'
export default {
  data() {
    return {}
  },
  mounted() {
    let boxDom = this.$refs.box
    Object.assign(boxDom.style, this.boxStyle)
  },
  components: {
    chartBox
  },
  methods: {},
  props: ['box-style', 'content-type','className']
}
</script>
<style lang="scss" scoped>
.box-b {
  position: absolute;
  box-sizing: border-box;
  background-image: url('../../assets/imgs/chart-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size:contain;
  border-radius: 20px;
  width: 877px;
  height: 440px;
  overflow: hidden;
  // mix-blend-mode: color-dodge;
}
</style>

