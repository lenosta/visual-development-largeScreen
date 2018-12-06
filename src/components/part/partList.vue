<template>
  <div class="home-con">
    <part
      v-for="part of pageData"
      :key="part.id"
      :part="part"
    >
      <component :is="item.componentName"></component>
    </part>
  </div>
</template>
<script>
import part from './part'
import { vueBus } from '../../assets/js/common/vueBus'
import * as components from './config'
export default {
  data() {
    return {
      pageData: config
    }
  },
  created() {},
  mounted() {},
  components: {
    part,
    ...components
  },
  mounted() {},
  methods: {}
}
</script>
 <style lang="scss" scoped>
.home-con {
  position: relative;
  height: 100%;
  perspective: 1200px;
}
</style>

