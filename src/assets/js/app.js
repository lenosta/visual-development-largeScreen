import appConfig from 'appConfig'

import Vue from 'vue'


class App{
    constructor(){
        let opt = {
            // - - - - - 私有属性 - - - - -  -
            _vueRoot:null,
            // config: appConfig
            _components: {
                pages: appConfig.pages,// vue template
                parts: appConfig.parts
            },
            // - - - - - 业务属性 - - - - -  -
            // 系统配置
            config:appConfig.config,
            //用户数据
            _options:appConfig.options,
        }
        Object.assign(this,opt)
        // 运行时配置合并，优先级 url > appConfig > defaultConfig
        Object.assign(this.config, App.urlArgs())
    }
    /**
     * 初始化app对象
     * @param {VueComponent} vueRoot Vue根节点
     */
    init(vueRoot){
        this._vueRoot=vueRoot;

    if(app.config.debug)
        console.log('%capp.config:%c'+JSON.stringify(app.config),'color:#447744;font-weight:700','color:#669966')
    }
    /**
     * 得到当前页面实例对象
     */
    get currentPage(){
        if(!this._vueRoot){
            console.error('app: _vueRoot is null,Please prepare ‘vueRoot’ and call  app.init(vueRoot)!')
            return
        }
        return this._vueRoot.$route.matched[0].instances.default
    }

    static urlArgs() {
        let args = {};
        let query = location.search.substring(1);
        let pairs = query.split('&');
        for (let i = 0; i < pairs.length; i++) {
          let pos = pairs[i].indexOf('=');
          if (pos === -1) {
            continue;
          }
          let name = pairs[i].substring(0, pos);
          let value = pairs[i].substring(pos + 1);
          value = decodeURIComponent(value);
          args[name] = value;
        }
        return args;
      }
}

let app = new App;

Vue.prototype.$app = app;
//if(app.config.debug)
window.app=app;


export default app;
