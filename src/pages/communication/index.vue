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
      <jianxi />
    </part>
  </div>
</template>
<script>
import part from '../../components/part/part'
import pie from '$chart/pie'
import bar from '$chart/bar'
import jianxi from '$chart/jianxiMap'
// 组件通信 包括3步
// 1.在需要通信的组件进行状态的注册
// 2.在状态改变时进行状态的更新
// 3.在需要更新视图的组件中进行状态监听根据参数进行视图更新
export default {
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {})
  },
  components: {
    pie,
    bar,
    jianxi,
    part
  },
  methods: {},
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

