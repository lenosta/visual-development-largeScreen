<template>
  <div class="document-data-wrapper">
    <div class="document-data-l">
      <span class="document-data-l-label">{{data.text}}</span>
      <span class="document-data-l-value">{{dataFormatterThousands(data.value)}}</span>
    </div>
    <ul class="document-data-r">
      <li
        v-for="(item, index) in data.list"
        :key="index"
      >
        <p class="document-data-r-label">{{item.name}}</p>
        <p class="document-data-r-value">{{dataFormatterThousands(item.value)}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { vueBus } from '../../assets/js/common/vueBus'
export default {
  name: 'documentData',
  data() {
    return {
      anima: '',
      data: {
        text: '单据数据',
        value: 0,
        list: [
          { name: '药品批次', value: 0 },
          { name: '票证数量', value: 0 },
          { name: '终端数量', value: 0 },
          { name: '消费者数量', value: 0 }
        ]
      }
    }
  },
  mounted() {
    let me = this
    vueBus.$on('imgOnload', v => {
      me.anima = v
    })
  },
  watch: {
    anima(val, oldVal) {
      val == 'animateStart' && this.animate()
    }
  },
  methods: {
    animate() {
      let me = this
      this.TweenMax.to(this.data, 4, { value: 163256352 })
      this.TweenMax.to(this.data.list[0], 4, { value: 15699836 })
      this.TweenMax.to(this.data.list[1], 4, { value: 234568456 })
      this.TweenMax.to(this.data.list[2], 4, { value: 7642536 })
      this.TweenMax.to(this.data.list[3], 4, { value: 94232352 })
      setInterval(function() {
        var val = Math.round(Math.random() * 30)
        me.TweenMax.to(me.data, 2.5, { value: me.data.value + val })
        me.TweenMax.to(me.data.list[0], 1, { value: me.data.list[0].value + val })
        me.TweenMax.to(me.data.list[1], 1.5, { value: me.data.list[1].value + val })
        me.TweenMax.to(me.data.list[2], 2.2, { value: me.data.list[2].value + val })
        me.TweenMax.to(me.data.list[3], 1.8, { value: me.data.list[3].value + val })
      }, 5000)
    },
    dataFormatterThousands(s) {
      /*
       * 参数说明：
       * s：要格式化的数字
       * */
      s = parseFloat((s + '').replace(/[^\d\.-]/g, '')) + ''
      var l = s
        .split('.')[0]
        .split('')
        .reverse()
      var t = ''
      for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '')
      }
      return t
        .split('')
        .reverse()
        .join('')
    }
  }
}
</script>
<style lang="scss" scoped>
.document-data-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  color: #66ebc2;
  .document-data-l {
    float: left;
    line-height: 228px;
    font-weight: 700;
    .document-data-l-label {
      font-size: 63px;
      margin-right: 96px;
    }
    .document-data-l-value {
      font-size: 100px;
    }
  }
  .document-data-r {
    float: right;
    margin-right: 40px;
    padding: 65px 0;
    li {
      float: left;
      width: 296px;
      text-align: center;
      font-weight: 700;
      .document-data-r-label {
        font-size: 38px;
        font-weight: normal;
      }
      .document-data-r-value {
        font-size: 36px;
        font-weight: normal;
      }
    }
  }
}
</style>


