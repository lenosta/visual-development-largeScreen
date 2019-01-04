<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <!-- 上左 -->
    <part :part="{className:'test-demo1',style: {  width: '520px',  height: '290px', left: '20px', top: '20px'}}">
      <pie />
    </part>
    <!-- 上中 -->
    <part :part="{className:'test-demo1',style:{ width: '520px',  height: '290px',left: '560px',top: '20px'}}">
      <bar />
    </part>
    <!-- 上右 -->
    <part :part="{ className:'test-demo1',style:{ width: '520px',  height: '290px',left: '1100px',top: '20px'}}">
      <chinaMap />
    </part>
    <!-- 以下是操作部分   -->
    <part :part="{style:{top:'40%',left:'45%',background:'none',width:'50%'}}">
      <button
        ref='btn'
        @click="showCharts"
      >触发子组件内部方法</button>
      <button
        ref='btn'
        @click="changeData"
      >改变子变组件内部值</button>
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
  data() {
    return {
      $pie: null,
      $bar: null,
      $chinaMap: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 获取当前页面任一组件实例，该方法返回数组
      this.$pie = this.$getComponent('pie')[0]
      this.$bar = this.$getComponent('bar')[0]
      this.$chinaMap = this.$getComponent('chinaMap')[0]
    })
  },
  components: {
    pie,
    bar,
    chinaMap,
    part
  },
  methods: {
    showCharts() {
      // 主动调取子组件实例方法
      this.$pie.initChart()
      this.$bar.initChart()
      this.$chinaMap.initChart()
    },
    changeData() {
      this.$pie.changeValue()
      this.$pie.initChart()
      this.$bar.changeValue()
      this.$bar.initChart()
      this.$chinaMap.initChart()
    }
  },
  computed: {}
}
</script>
 <style lang="scss" scoped>
p {
  text-align: center;
}
button {
  background: none;
  outline: none;
  border: 0 none;
  color: #fff;
  height: 30px;
  line-height: 30px;
  background: #012b60;
  padding: 0 5px;
}
</style>

