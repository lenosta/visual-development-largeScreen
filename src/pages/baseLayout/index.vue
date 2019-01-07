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
      <part :part="{style:{top:'330px',left:'720px',background:'none',width:'300px',height:'50px'}}"><button @click="changeStyle">点击改变stlye</button><button @click="reset">点击复原</button></part>
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
      this.$parts.forEach((e, i) => {
        i < 3 && e.setStyle({ top: '50px', width: '240px', height: '150px' })
      })
    },
    reset() {
      this.$parts.forEach((e, i) => {
        i < 3 && e.setStyle({ top: '20px', width: '520px', height: '290px' })
      })
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$parts = this.$getComponent('part')
    })
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
  margin: 10px;
}
</style>

