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
export default {
  data() {
    return {
    }
  },
  props: ['partsData'],
  created() {
  },
  mounted() {
    console.log(this.appConfig)
  },
  components: {
    part,
    ...this.appConfig.components1
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

