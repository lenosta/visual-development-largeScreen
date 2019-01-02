<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <!-- 上左 -->
    <part :part="{className:'test-demo1',style: {  width: '30%',  height: '30%', left: '2%', top: '50px'}}">
      <pie />
      <p>part1</p>
    </part>
    <!-- 上中 -->
    <part :part="{className:'test-demo1',style:{width: '30%',height: '30%',left: '34%',top: '50px'}}">
      <bar />
      <p>part2</p>
    </part>
    <!-- 上右 -->
    <part :part="{ className:'test-demo1',style:{width: '30%',height: '30%',left: '66%',top: '50px'}}">
      <chinaMap />
      <p>part3</p>
    </part>
    <part :part="{style:{top:'40%',left:'45%',background:'none'}}">
      <button
        ref='btn'
        @click="showPie"
      >测试组件实例改变属性</button>
      <button
        ref='btn'
        @click="changePieData"
      >测试改变组件值</button>
    </part>
  </div>
</template>
<script>
import part from '../../components/part/part'
import pie from '$chart/pie'
import bar from '$chart/bar'
import chinaMap from '$chart/chinaMap'
import App from '../../assets/js/app/app'
export default {
  name: 'demo1',
  data() {
    return {
      $pie: null
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$pie = this.$getComponent('pie')[0]
    })
  },
  components: {
    pie,
    bar,
    chinaMap,
    part
  },
  methods: {
    showPie() {
      // 获取当前页面任一组件实例，该方法返回数组，可在都没渲染完后进行任一操作
      console.log(this.$pie)
      this.$pie.initChart()
    },
    changePieData() {
      this.$pie.value1 = 50
      this.$pie.value2 = 50
      this.$pie.initChart()
    }
  },
  computed: {}
}
</script>
 <style lang="scss" scoped>
p {
  text-align: center;
}
</style>

