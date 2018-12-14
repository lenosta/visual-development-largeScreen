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
import parts from 'appConfig/parts.register'
import app1 from 'assets/js/App'

export default {
  data() {
    return {}
  },
  props: ['partsData'],
  created() {
    console.log(app1)
    console.log('partlist-created:'+this.$app)
  },
  mounted() {
    
  },
  components: {
    part,
    ...parts
  },
  methods: {},
  computed: {
    //...mapState({ pages })
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

