<template>
  <div style="width:100%;height:100%">
    <h1 class="chart-top-title">价格指数监管</h1>
    <div
      ref="treeAnalysis"
      style="height:370px"
    >
    </div>
  </div>
  </div>
</template>
<script>
import { getTreeData } from '../../api/apiList/state'
import { vueBus } from '../../assets/js/common/vueBus'
export default {
  data() {
    return {
      treeAnalysisChart: require('./TreeAnalysisChart.min.js'),
      treeData: {
        vertices: [
          {
            id: '0',
            name: '药品价格指数',
            value: '102.1',
            lastValue: '109.18'
          },
          {
            id: 'V',
            name: '抗生素价格指数',
            value: '110.16',
            lastValue: '110.42'
          },
          {
            id: 'V1',
            name: '降血压类',
            value: '123.15',
            lastValue: '122.68'
          },
          {
            id: 'V2',
            name: '降血压类',
            value: '106.03',
            lastValue: '105.13'
          },
          {
            id: 'V3',
            name: '降血压类',
            value: '99.1',
            lastValue: '99.2'
          },
          {
            id: 'V4',
            name: '降血压类',
            value: '111.35',
            lastValue: '111.47'
          },
          {
            id: 'V5',
            name: '降血压类',
            value: '110.35',
            lastValue: '111.47'
          },
          {
            id: 'V6',
            name: '降血压类',
            value: '112.35',
            lastValue: '111.47'
          },
          {
            id: 'V7',
            name: '降血压类',
            value: '110.35',
            lastValue: '111.47'
          }
        ],
        edges: [
          {
            source: '0',
            target: 'V'
          },
          {
            source: 'V',
            target: 'V1'
          },
          {
            source: 'V',
            target: 'V2'
          },
          {
            source: 'V',
            target: 'V3'
          },
          {
            source: 'V',
            target: 'V4'
          },
          {
            source: 'V',
            target: 'V5'
          },
          {
            source: 'V',
            target: 'V6'
          },
          {
            source: 'V',
            target: 'V7'
          }
        ]
      }
    }
  },
  methods: {
    getUpsAndDowns(val, lastVal) {
      return val - lastVal
    },
    getItem(items, map) {
      let me = this
      let itemsRet = []
      for (let i = 0; i < items.length; i++) {
        let o = map[items[i]]
        if (o != null) {
          let item = {
            id: o.id,
            name: o.name,
            index: o.value,
            percentage: me.getUpsAndDowns(o.value, o.lastValue)
          }
          itemsRet.push(item)
        }
      }
      return itemsRet
    },
    dealData(fn, data) {
      let me = this
      let dataTree = {}
      let links = data.edges
      let nodes = data.vertices
      let dataSourceToTarget = {}
      let dataTargetToSource = {}
      for (let i = 0; i < links.length; i++) {
        dataTargetToSource[links[i].target] = links[i].source
        if (dataSourceToTarget[links[i].source] == null) {
          dataSourceToTarget[links[i].source] = [links[i].target]
        } else {
          dataSourceToTarget[links[i].source].push(links[i].target)
        }
      }

      let linkMaps = {}
      for (let i = 0; i < nodes.length; i++) {
        if (dataTargetToSource[nodes[i].id] == null) {
          dataTree = {
            id: nodes[i].id,
            combinedIndex: nodes[i].value,
            allPercentage: me.getUpsAndDowns(nodes[i].value, nodes[i].lastValue),
            basket: {},
            // grainOil: {},
            // date: data.date
          }
        } else {
          linkMaps[nodes[i].id] = nodes[i]
        }
      }

      for (let i = 0; i < dataSourceToTarget[dataTree.id].length; i++) {
        let item = linkMaps[dataSourceToTarget[dataTree.id][i]]
        if (item.name === '抗生素价格指数') {
          dataTree.basket = {
            id: item.id,
            name: item.name,
            index: item.value,
            percentage: me.getUpsAndDowns(item.value, item.lastValue),
            item: me.getItem(dataSourceToTarget[item.id], linkMaps)
          }
        // } else if (item.name === '抗生素价格指数') {
        //   dataTree.grainOil = {
        //     id: item.id,
        //     name: item.name,
        //     index: item.value,
        //     percentage: me.getUpsAndDowns(item.value, item.lastValue),
        //     item: me.getItem(dataSourceToTarget[item.id], linkMaps)
        //   }
        }
      }
      fn(dataTree)
    },
    init() {
      let me = this
      let treeDom = me.$refs.treeAnalysis
      let treeAnalysis = me.treeAnalysisChart.default(treeDom)
      treeAnalysis.init()
      me.dealData(function(data) {
        treeAnalysis.show(data)
      }, me.treeData)
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
</style>

