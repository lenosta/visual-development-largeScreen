<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <div>
      <!-- 上左 -->
      <part :part="{className:'test',style: {  width: '520px',  height: '290px', left: '220px', top: '70px'}}">
        <p>part</p>
      </part>
      <!-- 上中 -->
      <part :part="{className:'test',style:{ width: '520px',  height: '290px',left: '760px',top: '70px'}}">
        <p>part</p>
      </part>
      <!-- 上右 -->
      <part :part="{ className:'test',style:{ width: '520px',  height: '290px',left: '1300px',top: '70px'}}">
        <p>part</p>
      </part>
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
  created() {},
  mounted() {}
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

