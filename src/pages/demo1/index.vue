<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <!-- 上左 -->
    <part :part="{className:'test-demo1',style: {  width: '400px',  height: '250px', left: '220px', top: '70px'}}">
      <pie />
    </part>
    <!-- 上中 -->
    <part :part="{className:'test-demo1',style:{ width: '400px',  height: '250px',left: '640px',top: '70px'}}">
      <bar />
    </part>
    <!-- 上右 -->
    <part :part="{ className:'test-demo1',style:{ width: '400px',  height: '250px',left: '1060px',top: '70px'}}">
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
        @click="changePieData"
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
  created() {},
  mounted() {
    this.$nextTick(() => {
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
      // 获取当前页面任一组件实例，该方法返回数组，可在都没渲染完后进行任一操作
      this.$pie.initChart()
      this.$bar.initChart()
      this.$chinaMap.initChart()
    },
    changePieData() {
      this.$pie.value1 = (Math.random() * 50).toFixed(0)
      this.$pie.value2 = 100 - this.$pie.value1
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

