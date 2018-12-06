<template>
  <div class="home-con">
    <dom-box v-for="item of pageData" :key="item.bid" :position='item.position' :className="item.className" :size="item.size" :callBack='item.callBack'>
      <!-- <component :is="item.componentName"></component> -->
    </dom-box>
  </div>
</template>
<script>
import domBox from '../../components/domBox/box1'
import {vueBus} from '../../assets/js/common/vueBus'
import { config } from './page.config.js'
export default {
  data() {
    return {
      pageData: config,
    }
  },
  created() {},
  mounted() {
  },
  components: {
    domBox
  },
  mounted() {},
  methods: {
  }
}
</script>
 <style lang="scss" scoped>
.home-con {
  position: relative;
  height: 100%;
  perspective: 1200px;
}
</style>

