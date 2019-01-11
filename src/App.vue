<template>
  <div
    id="app"
    class="app"
  >
    <header>
      <div class="inner">
        <h1 class="lg-title"><img class="logo" />可视化框架{{title?' - '+title:''}}</h1>
        <div class="user-area down-temp"> <a href="https://codeload.github.com/jusfoun-FE/visual-development-largeScreen/zip/master">立即使用</a></div>
        <div class="user-area"><a
            :href="'https://github.com/jusfoun-FE/visual-development-largeScreen/tree/master/src/pages/'+page+'/index.vue'"
            target="_blank"
          >查看源码</a></div>
      </div>
    </header>
    <ul :class="isMax?'left-menu max':'left-menu'">
      <div class="left-menu-list">
        <router-link
          v-for="item in items"
          class="list-item"
          :to="{name:item.name,params:{title:item.title}}"
          :key='item.name'
          tag="li"
        >
          <i :class="item.menuIcon"></i>{{item.title}}
        </router-link>
      </div>
    </ul>
    <router-view class="main"></router-view>

    <footer>
      <span> 版权所有 xxxxx</span>
      <span>Copyright xxxx All Right Reserved</span>
    </footer>
  </div>
</template>

<script>
import { state, pageAdapt } from '@/assets/js/app'
export default {
  data() {
    return {
      title: '',
      isMax: false,
      page: ''
    }
  },
  created() {
    this.items = this.$router.options.routes
      .filter(route => route.isMenu)
      .map(route => {
        return {
          name: route.name,
          title: route.meta.title,
          path: route.path,
          menuIcon: 'icon iconfont ' + route.menuIcon
        }
      })
  },
  mounted() {
    // 是否开启星空效果
    if (this.appConfig.stars == true) {
      canvas('stars', 230, 2000, 60, 2, 800000, 0.5)
    }
    // 是否开启页面适配
    this.appConfig.isAdapt &&
      pageAdapt({
        domSelector: '#app',
        sizeEqualRatio: true,
        w: 1920,
        h: 1080
      })
  },
  watch: {
    // 全局状态isLoadPartComplete part组件是否加载完毕
    isLoadPartComplete: {
      handler: function(newV, oldV) {
        if (newV) {
          console.log('part加载完毕', newV)
          setTimeout(() => {
            console.log(1)
            document.querySelector('#appLoading').style.top = '-100%'
          }, 10000)
          setTimeout(() => {
            console.log(2)
            document.querySelector('#appLoading').style.display = 'none'
          }, 13000)
        }
      }
    },
    $route: {
      handler: function(newV, oldV) {
        this.title = newV.meta.title
        this.page = newV.name
      },
      immediate: true
    }
  },
  computed: {
    //获取全局状态isLoadPartComplete
    ...state.getState(['isLoadPartComplete'])
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  box-sizing: border-box;
  background-size: cover;
  z-index: 999;
  width: 100%;
  height: 100%;
}
header {
  height: 55px;
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #333;
}
.inner {
  display: flex;
  justify-content: space-between;
  margin: auto;
}
header h1 {
  color: #fff;
  font-size: 20px;
  line-height: 55px;
}
.lg-title {
  display: block;
}
.sm-title {
  display: none;
}
.logo {
  border: 0 none;
  margin: 10px;
  width: 35px;
}
.left-menu {
  width: 200px;
  height: calc(100% - 110px);
  border-right: 1px solid #333;
  position: absolute;
  top: 55px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  transform: translate3d(0, 0, 0);
}
.left-menu-list {
  height: 100%;
  overflow: auto;
}
.left-menu.max {
  transform: translate3d(-200px, 0, 0);
}
.left-menu .handler {
  position: absolute;
  top: 10px;
  right: -25px;
  width: 25px;
  height: 25px;
  border: 1px solid #333;
  box-sizing: border-box;
  padding: 3px 3px 2px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.5);
}
.left-menu.max .handler {
  transform: rotate(180deg);
}
.left-menu .handler:hover {
  color: #ffffff;
}
.left-menu li {
  width: 100%;
  float: left;
  line-height: 30px;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #333;
  color: rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  transition: all 0.3s;
  cursor: pointer;
}
.left-menu li:hover {
  background: rgba(255, 255, 255, 0.1);
}
.left-menu li.router-link-active {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}
.icon {
  font-size: 16px;
  margin-right: 10px;
}
.user-area {
  width: 100px;
  height: 55px;
  line-height: 55px;
  border-left: 1px solid #333;
  text-align: center;
  transition: all 0.3s;
}
.user-area:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  cursor: pointer;
}
.user-area:hover a {
  color: #fff;
}
.down-temp {
  position: absolute;
  right: 100px;
}
.main {
  width: calc(100% - 200px);
  height: calc(100% - 110px);
  position: absolute;
  top: 55px;
  left: 200px;
  // overflow: hidden;
  background-size: 100% 100%;
}
footer {
  line-height: 55px;
  height: 55px;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid #333;
  color: rgba(255, 255, 255, 0.6);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
