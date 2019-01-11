<template>
  <div>
    <part :part="{ className:'test', style:{width: '520px',  height: '290px',left: '20px',top: '20px',padding:'20px',fontSize:'16px'}}">当前配置：{{appConfig}}</part>
    <part :part="{style:{top:'330px',left:'260px',background:'none',width:'70px',height:'50px',textAlign:'center'}}"><button @click="changeOption">点我试试</button></part>
  </div>
</template>
<script>
//运行时配置>组件配置>页面配置>默认配置
export default {
  data() {
    return {}
  },
  methods: {
    changeOption() {
      let url = location.origin + '/?debug=true&isAdapt=true&animate=false&stars=true' + location.hash
      location.href = url
    }
  },
  created() {},
  mounted() {}
}
</script>
 <style lang="scss" scoped>
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

