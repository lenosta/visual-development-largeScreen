<template>
  <canvas id="canvas" width="1800" height="1015"></canvas>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      let d3 = this.d3.d3
      var canvas = document.querySelector('#canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height
      d3.csv('../../../static/csv/forceData.csv', function(error, data) {
        if (error) throw error
        var root = d3
          .stratify()
          .id(function(d) {
            return d.path
          })
          .parentId(function(d) {
            return d.path.substring(0, d.path.lastIndexOf('/'))
          })(data)

        var nodes = root.descendants(),
          links = root.links()

        var linkDist = function(d) {
          return d.target.children ? 15 * d.target.children.length : 100
        }

        var simulation = d3
          .forceSimulation(nodes)
          .force('charge', d3.forceManyBody())
          .force(
            'link',
            d3
              .forceLink(links)
              .strength(0.7)
              .distance(linkDist)
          )
          .force('x', d3.forceX())
          .force('y', d3.forceY())
          .on('tick', ticked)

        d3.select(canvas).call(
          d3
            .drag()
            .container(canvas)
            .subject(dragsubject)
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended)
        )

        function ticked() {
          context.clearRect(0, 0, width, height)
          context.save()
          context.translate(width / 2, height / 2)

          context.beginPath()
          links.forEach(drawLink)
          context.strokeStyle = '#aaa'
          context.stroke()

          context.beginPath()
          nodes.forEach(drawNode)
          context.fill()
          context.strokeStyle = '#fff'
          context.stroke()

          context.restore()
        }

        function dragsubject() {
          return simulation.find(d3.event.x - width / 2, d3.event.y - height / 2)
        }

        function dragstarted() {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart()
          d3.event.subject.fx = d3.event.subject.x
          d3.event.subject.fy = d3.event.subject.y
        }

        function dragged() {
          d3.event.subject.fx = d3.event.x
          d3.event.subject.fy = d3.event.y
        }

        function dragended() {
          if (!d3.event.active) simulation.alphaTarget(0)
          d3.event.subject.fx = null
          d3.event.subject.fy = null
        }

        function drawLink(d) {
          context.moveTo(d.source.x, d.source.y)
          context.lineTo(d.target.x, d.target.y)
        }

        function drawNode(d) {
          context.moveTo(d.x, d.y)
          context.font = '10px Arial'
          context.fillText(d.id.substr(d.id.lastIndexOf('/') + 1), d.x, d.y)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

