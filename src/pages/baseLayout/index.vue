<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <div>
      <!-- 上左 -->
      <part :part="{className:'test',style: {  width: '520px',  height: '290px', left: '20px', top: '20px'}}">
        <p>part</p>
      </part>
      <!-- 上中 -->
      <part :part="{className:'test',style:{ width: '520px',  height: '290px',left: '560px',top: '20px'}}">
        <p>part</p>
      </part>
      <!-- 上右 -->
      <part :part="{ className:'test',style:{ width: '520px',  height: '290px',left: '1100px',top: '20px'}}">
        <p>part</p>
      </part>
      <!-- 操作部分 -->
      <part :part="{style:{top:'40%',left:'40%',background:'none',width:'50%'}}"><button @click="changeStyle">点击改变stlye</button></part>
    </div>
  </div>
</template>
<script>
import part from '../../components/part/part'
export default {
  data() {
    return {}
  },
  components: {
    part
  },
  methods: {
    changeStyle() {
      let part1 = this.$getComponent('part')[0]
      part1.setStyle({ top: '60px', width: '100px',height:'60px'})
    },
  },
  created() {},
  mounted() {
    let parts = this.$getComponent('part')[0]
    console.log(parts)
  }
}
</script>
 <style lang="scss" scoped>
p {
  text-align: center;
}
.test {
  transition: all 0.8s;
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

