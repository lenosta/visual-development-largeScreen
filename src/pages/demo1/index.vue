<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <!-- 上左 -->
    <part :part="{className:'test-demo1',style: {  width: '30%',  height: '30%', left: '2%', top: '50px'}}">
      <pie />
    </part>
    <!-- 上中 -->
    <part :part="{className:'test-demo1',style:{width: '30%',height: '30%',left: '34%',top: '50px'}}">
      <bar />
    </part>
    <!-- 上右 -->
    <part :part="{ className:'test-demo1',style:{width: '30%',height: '30%',left: '66%',top: '50px'}}">
      <chinaMap />
    </part>
  </div>
</template>
<script>
import part from '../../components/part/part'
import pie from '$chart/pie'
import bar from '$chart/bar'
import chinaMap from '$chart/chinaMap'
export default {
  data() {
    return {}
  },
  appOption: {debug: false},
  created() {},
  mounted() {
    // console.log(this.appOption.animate)
  },
  components: {
    pie,
    bar,
    chinaMap,
    part
  },
  methods: {},
  computed: {}
}
</script>
 <style lang="scss" scoped>
</style>

