<template>
  <ul class='ul-box'>
    <li>
      <router-link :to="{name:'page1'}">药品监管溯源大数据平台</router-link>
    </li>
    <li>
      <router-link :to="{name:'page2'}">智能决策</router-link>
    </li>
    <li>
      <router-link :to="{name:'page3'}">生成分析</router-link>
    </li>
    <li>
      <router-link :to="{name:'page4'}">市场大数据</router-link>    </li>
  </ul>
</template>

<script type="text/javascript">
export default {}
</script>

<style lang="scss" scoped>
.ul-box {
  width: 100%;
  height: 6%;
  margin: 0 auto;
  display: flex;
  li {
    flex: 1;
    text-align: center;
    a {
      color: #fff;
    }
  }
}
</style>

