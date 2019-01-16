<template>
  <div>
    <part :part="{ className:'test', style:{width: '520px',  height: '290px',left: '20px',top: '20px',padding:'20px',fontSize:'16px'}}">当前配置：{{appConfig}}<br>
    我是mock数据：{{mock}}
    </part>
    <part :part="{style:{top:'-60px',left:'650px',background:'none',width:'200px',height:'60px',zIndex:99999,paddingLeft:'5px'}}"><button @click="changeOption">点我试试</button></part>
  </div>
</template>
<script>
//运行时配置>组件配置>页面配置>默认配置
import { testMock } from '@/api/apiList/state'
export default {
  data() {
    return {
      mock:'没有开启mock模式'
    }
  },
  methods: {
    changeOption() {
      let url =
        location.origin + location.pathname + '?debug=true&isAdapt=true&animate=false&stars=true&isMock=true' + location.hash
      location.href = url
    }
  },
  created() {
     // test mock
    if (this.appConfig.isMock) {
      testMock().then(res => {
        this.mock=res
      })
    }
  },
  mounted() {}
}
</script>
 <style lang="scss" scoped>
button {
  background: none;
  outline: none;
  border: 0 none;
  color: #fff;
  height: 60px;
  width: 130px;
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

