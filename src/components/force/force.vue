<template>
  <svg id="canvas" width='100%' height='100%'></svg>
</template>
<script>
import * as d3 from 'd3'
export default {
  data() {
    return {}
  },
  methods: {
    draw() {
      var svg = d3.select('#canvas')
      var width = parseInt(svg.style('width')),
        height = parseInt(svg.style('height'))

      var force = d3.layout
        .force()
        .gravity(0.05)
        .distance(150)
        .charge(-100)
        .size([width, height])

      d3.json('../../../static/json/forceData.json', function(error, json) {
        if (error) throw error

        force
          .nodes(json.nodes)
          .links(json.links)
          .start()

        var link = svg
          .selectAll('.link')
          .data(json.links)
          .enter()
          .append('line')
          .attr('class', 'link')
          .style('stroke', '#66b1ff')

        var node = svg
          .selectAll('.node')
          .data(json.nodes)
          .enter()
          .append('g')
          .attr('class', 'node')
          .call(force.drag)

        node
          .append('circle')
          .attr('r', 3)
          .attr('x', d => d.x)
          .attr('y', d => d.y)
          .style('fill', '#1bd6f7')
          .style('stroke', '#fff')

        node
          .append('text')
          .attr('dx', 12)
          .attr('dy', '.35em')
          .attr('fill', '#1bd6f7')
          .text(function(d) {
            return d.name
          })

        force.on('tick', function() {
          link
            .attr('x1', function(d) {
              return d.source.x
            })
            .attr('y1', function(d) {
              return d.source.y
            })
            .attr('x2', function(d) {
              return d.target.x
            })
            .attr('y2', function(d) {
              return d.target.y
            })

          node.attr('transform', function(d) {
            return 'translate(' + d.x + ',' + d.y + ')'
          })
        })
      })
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.draw()
    })
  }
}
</script>
<style lang="scss" scoped>
#canvas {
  width: 100%;
  height: 100%;
  .node {
    cursor: pointer !important;
  }
}
</style>

