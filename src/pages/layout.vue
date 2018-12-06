<template>
  <div id="layout">
    <!-- <my-header /> -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
// import myHeader from '../components/header'
export default {
  data() {
    return {}
  },
  components: {
    // myHeader
  }
}
</script>

<style lang="scss" scoped>
#layout {
  height: 100%;
  width: 100%;
}
.main {
  padding: 90px;
  height: 100%;
  box-sizing: border-box;
}
</style>
