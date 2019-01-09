<template>
  <!-- 每个part组件传入part属性进行页面布局 写明页面位置 方便修改及调整 -->
  <div>
    <div>
      <!-- 上 -->
      <part :part="{className:'test test-trans',style: {  width: '400px',  height: '200px', left: '20px', top: '20px'}}">
        <p>part</p>
      </part>
      <part :part="{className:'test test-trans',style:{ width: '400px',  height: '200px',left: '440px',top: '20px'}}">
        <p>part</p>
      </part>
      <part :part="{ className:'test test-trans',style:{ width: '400px',  height: '200px',left: '860px',top: '20px'}}">
        <p>part</p>
      </part>
      <part :part="{ className:'test test-trans',style:{ width: '400px',  height: '200px',left: '1280px',top: '20px'}}">
        <p>part</p>
      </part>

      <!-- 下 -->
      <part :part="{ className:'test test-trans',style:{ width: '400px',  height: '200px',left: '20px',top: '240px'}}">
        <p>part</p>
      </part>
      <part :part="{ className:'test test-trans',style:{ width: '400px',  height: '200px',left: '440px',top: '240px'}}">
        <p>part</p>
      </part>
      <part :part="{ className:'test test-trans',style:{ width: '400px',  height: '200px',left: '860px',top: '240px'}}">
        <p>part</p>
      </part>
      <part :part="{ className:'test test-trans',style:{ width: '400px',  height: '200px',left: '1280px',top: '240px'}}">
        <p>part</p>
      </part>
      <!-- 操作部分 -->
      <part :part="{style:{top:'-50px',left:'600px',background:'none',width:'420px',height:'50px',zIndex:99999}}">
        <button @click="changeLayout(1)">布局一</button>
        <button @click="changeLayout(2)">布局二</button>
        <button @click="changeLayout(3)">布局三</button>
        <button @click="reset"> 重置 </button>
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
  methods: {
    changeLayout(flag) {
      switch (flag) {
        case 1:
          this.layoutOne()
          break
        case 2:
          this.layoutTwo()
          break
        case 3:
          this.layoutThree()
          break
      }
    },
    reset() {
      // 上
      this.$parts[0].setStyle({ width: '400px', height: '200px', left: '20px', top: '20px' })
      this.$parts[1].setStyle({ width: '400px', height: '200px', left: '440px', top: '20px' })
      this.$parts[2].setStyle({ width: '400px', height: '200px', left: '860px', top: '20px' })
      this.$parts[3].setStyle({ width: '400px', height: '200px', left: '1280px', top: '20px' })
      //下
      this.$parts[4].setStyle({ width: '400px', height: '200px', left: '20px', top: '240px' })
      this.$parts[5].setStyle({ width: '400px', height: '200px', left: '440px', top: '240px' })
      this.$parts[6].setStyle({ width: '400px', height: '200px', left: '860px', top: '240px' })
      this.$parts[7].setStyle({ width: '400px', height: '200px', left: '1280px', top: '240px' })
    },
    // 布局一
    layoutOne() {
      this.$parts[0].setStyle({ width: '400px', height: '200px', left: '20px', top: '20px' })
      this.$parts[1].setStyle({ width: '820px', height: '420px', left: '440px', top: '20px' })
      this.$parts[2].setStyle({ width: '820px', height: '200px', left: '440px', top: '460px' })
      this.$parts[3].setStyle({ width: '400px', height: '200px', left: '1280px', top: '20px' })

      this.$parts[4].setStyle({ width: '400px', height: '200px', left: '20px', top: '240px' })
      this.$parts[5].setStyle({ width: '400px', height: '200px', left: '20px', top: '460px' })
      this.$parts[6].setStyle({ width: '400px', height: '200px', left: '1280px', top: '460px' })
      this.$parts[7].setStyle({ width: '400px', height: '200px', left: '1280px', top: '240px' })
    },
    // 布局二
    layoutTwo() {
      this.$parts[0].setStyle({ width: '200px', height: '600px', left: '20px', top: '20px' })
      this.$parts[1].setStyle({ width: '600px', height: '600px', left: '240px', top: '20px' })
      this.$parts[2].setStyle({ width: '400px', height: '200px', left: '860px', top: '20px' })
      this.$parts[3].setStyle({ width: '400px', height: '200px', left: '1280px', top: '20px' })

      this.$parts[4].setStyle({ width: '1660px', height: '150px', left: '20px', top: '640px' })
      this.$parts[5].setStyle({ width: '820px', height: '160px', left: '860px', top: '460px' })
      this.$parts[6].setStyle({ width: '400px', height: '200px', left: '860px', top: '240px' })
      this.$parts[7].setStyle({ width: '400px', height: '200px', left: '1280px', top: '240px' })
    },
    // 布局三
    layoutThree() {
      this.$parts[0].setStyle({ width: '433px', height: '490px', left: '20px', top: '20px' })
      this.$parts[1].setStyle({ width: '433px', height: '490px', left: '473px', top: '20px' })
      this.$parts[2].setStyle({ width: '300px', height: '150px', left: '1380px', top: '190px' })
      this.$parts[3].setStyle({ width: '300px', height: '150px', left: '1380px', top: '20px' })

      this.$parts[4].setStyle({ width: '434px', height: '490px', left: '926px', top: '20px' })
      this.$parts[5].setStyle({ width: '1340px', height: '150px', left: '20px', top: '530px' })
      this.$parts[6].setStyle({ width: '300px', height: '150px', left: '1380px', top: '360px' })
      this.$parts[7].setStyle({ width: '300px', height: '150px', left: '1380px', top: '530px' })
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // 获取组件
      this.$parts = this.$getComponent('part')
    })
  }
}
</script>
 <style lang="scss" scoped>
p {
  text-align: center;
}
.test-trans {
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

