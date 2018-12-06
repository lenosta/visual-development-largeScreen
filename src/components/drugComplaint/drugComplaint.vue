<template>
  <div class="wrap">
    <h1 class="drug-tit">药品投诉监管</h1>
    <div class="drug-con">
      <div class='drug-con-tit'>
        <span>消费者投诉</span>
        <span>投诉药品</span>
        <span>投诉地域</span>
      </div>
      <div class="drug-table">
        <div class='complaint-l fl'>
          <span class="complaint-l-all">全国投诉</span>
          <em style="font-size:60px; font-weight:700;letter-spacing: -7px;">{{number|filterNumber}}</em> </br>
          月度: <span>21.5%</span>
          <span class="down-png"></span>
        </div>
        <ul class="complaint-r fr">
          <li class="complaint-item">
            <span>左氧氟沙星注射液</span>
            <span>山西</span>
          </li>
          <li class="complaint-item">
            <span>左氧氟沙星注射液</span>
            <span>山西</span>
          </li>
          <li class="complaint-item">
            <span>左氧氟沙星注射液</span>
            <span>山西</span>
          </li>
          <li class="complaint-item">
            <span>左氧氟沙星注射液</span>
            <span>山西</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0
    }
  },
  mounted() {
    this.TweenMax.to(this, 2, { number: 512 })
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  .drug-tit {
    height: 76px;
    line-height: 95px;
    font-size: 40px;
    font-weight: 700;
    color: #65ecc3;
    text-align: center;
    letter-spacing: 2px;
  }
  .drug-con {
    height: 364px;
    font-size: 26px;
    padding: 35px 30px 35px;
    box-sizing: border-box;
    letter-spacing: 2px;
  }
  .drug-con-tit {
    height: 80px;
    line-height: 80px;
    border: 2px solid #08a7df;
    span {
      display: inline-block;
      text-align: center;
      color: #65ecc3;
      font-size: 30px;
      font-weight: bold;
      &:nth-child(1) {
        width: 300px;
      }
      &:nth-child(2) {
        width: 250px;
      }
      &:nth-child(3) {
        width: 240px;
      }
    }
  }
  .drug-table {
    width: 808px;
    height: 200px;
    margin: 20px auto 0;
    .complaint-l {
      width: 302.5px;
      text-align: center;
      line-height: 56px;
      position: relative;
      font-size: 32px;
      .complaint-l-all {
        display: block;
        margin-bottom: 10px;
      }
      .down-png {
        width: 28px;
        height: 36px;
        position: absolute;
        background: url('../../assets/imgs/down-png.png') center no-repeat;
        background-size: cover;
        bottom: 10px;
        right: 24px;
      }
    }
    .complaint-r {
      .complaint-item {
        width: 492px;
        height: 46px;
        line-height: 46px;
        margin-bottom: 3px;
        span {
          text-align: center;
          display: inline-block;
          line-height: 46px;
          &:nth-child(1) {
            width: 250px;
          }
          &:nth-child(2) {
            width: 230px;
          }
        }
        &:nth-child(2n) {
          background: #40546c;
        }
      }
    }
  }
}
</style>

