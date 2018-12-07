<template>
  <div class="parts-wrapper">
    <part
      v-for="part of partsData"
      :key="part.id"
      :part="part"
    >
      <component :is="part.type"></component>
    </part>
  </div>
</template>
<script>
import part from './part'
import * as components from './config'
// import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  props: ['partsData'],
  created() {
    // var name = this.$route.name
    // this.pageData = this.pages.filter((v, i) => {
    //   return (v.name = name)
    // })
  },
  mounted() {},
  components: {
    part,
    ...components
  },
  methods: {},
  computed: {
    // ...mapState({ pages })
  }
}
</script>
 <style lang="scss" scoped>
.parts-wrapper {
  position: relative;
  height: 100%;
  perspective: 1200px;
}
</style>

