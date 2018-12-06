<template>
  <partList :partsData=currentPages.parts></partList>
</template>
<script>
import partList from '../../components/part/partList'
import { vueBus } from '../../assets/js/common/vueBus'
import { config } from './page2.config'
import * as MUTATION_TYPES from '../../store/mutation-types'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.addPage(config)
    this.getPage(this.$route.name)
  },
  components: {
    partList
  },
  methods: {
    ...mapMutations({ addPage: MUTATION_TYPES.ADD_PAGE, getPage: MUTATION_TYPES.GET_PAGE })
  },
  computed: {
    ...mapState(['currentPages'])
  }
}
</script>
 <style lang="scss" scoped>
</style>

