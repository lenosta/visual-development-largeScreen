<template>
  <partList :partsData=pages[name].parts></partList>
</template>
<script>
import partList from '../../components/part/partList'
import * as MUTATION_TYPES from '../../store/mutation-types'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      name: this.$route.name || this.$route.path.slice(1)
    }
  },
  mounted() {
  },
  components: {
    partList,
  },
  methods: {
      init(){
      console.log('page3 init')
    }
  },
  computed: {
    ...mapState(['pages'])
  }
}
</script>
 <style lang="scss" scoped>
</style>

