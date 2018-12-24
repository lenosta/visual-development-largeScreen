<template>
  <partList :partsData=pages[name].parts></partList>
</template>
<script>
import {testPost} from '../../api/apiList/state'
import partList from '../../components/part/partList'
import * as MUTATION_TYPES from '../../store/mutation-types'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      name: this.$route.name || this.$route.path.slice(1)
    }
  },
  watch: {
    $route(to, from) {
      this.name = to.name
    }
  },
   created() {
    let params = { name: 'aaa', b: 'b' }
    testPost(params).then(res => {
      console.log(res)
    })
  },
  mounted() {
    console.log(this.name)
  },
  components: {
    partList
  },
  methods: {
    // init(){
    //   console.log('page2 init')
    // }
  },
  computed: {
    ...mapState(['pages'])
  }
}
</script>
 <style lang="scss" scoped>
</style>

