<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <!-- 上左 -->
    <part :part="{className:'test',style: {  width: '520px',  height: '290px', left: '20px', top: '20px'}}">
      <pie />
    </part>
    <!-- 上中 -->
    <part :part="{className:'test',style:{ width: '520px',  height: '290px',left: '560px',top: '20px'}}">
      <bar />
    </part>
    <!-- 上右 -->
    <part :part="{ className:'test',style:{ width: '520px',  height: '290px',left: '1100px',top: '20px'}}">
      <chinaMap />
    </part>
    <!-- 以下是操作部分   -->
    <part :part="{style:{top:'-60px',left:'600px',background:'none',width:'420px',height:'60px',zIndex:99999,paddingLeft:'5px'}}">
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
import pie from '$chart/pie'
import bar from '$chart/bar'
import chinaMap from '$chart/chinaMap'
export default {
  data() {
    return {
      $pie: null,
      $bar: null,
      $chinaMap: null
    }
  },
  appConfig: { animate: true },
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
    chinaMap
  },
  methods: {
    showCharts() {
      // 触发子组件内部方法
      this.$pie.initChart()
      this.$bar.initChart()
      this.$chinaMap.initChart()
    },
    // 改变子变组件内部值
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
  height: 60px;
  width: 180px;
  line-height: 60px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  float: left;
  margin-left: -1px;
}
button:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>

