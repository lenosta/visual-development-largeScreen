<template>
  <div>
    <part :part="{style:{width: '520px',  height: '290px',left: '20px',top: '20px',padding:'20px',fontSize:'16px'}}">增加url查询参数?debug=true&animate=false&stars=true 切换到动画&通信页签试试</part>
  </div>
</template>
<script>
//运行时配置>组件配置>页面配置>默认配置
import part from '../../components/part/part'
export default {
  data() {
    return {
    }
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

