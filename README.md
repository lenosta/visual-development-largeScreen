# vue大屏可视化模版
[![Build Status](https://travis-ci.org/UnicomBigData/YPJG.svg?branch=master)](https://travis-ci.org/UnicomBigData/YPJG)
# 1.配置项
> 修改端口：                   `config/index.js` --port
> 是否开启elslint              `config/index.js` --useEslint
> build之后修改路径 :          `config/index.js` --assetsPublicPath: './'
# 2.脚手架SRC目录搭建结构
```
|-- src                              // 源码目录
|   |-- api                          // 获取数据接口API相关文件
|   |   |-- api.js                   // axios封装方法
|   |   |-- config.js                // 接口配置项
|   |   |-- state.js                 // 接口调用封装函数
|   |-- assets                       // 资源文件 CSS JS IMG
|   |   |-- css
|   |   |   |-- _diy-elementui.scss  // 可以在这里重置element-ui样式
|   |   |   |-- _lib-base.scss       // 页面基本处理样式,建议优先阅读一遍
|   |   |   |-- _lib-mixin.scss      // sass 宏
|   |   |   |-- _lib-variable.scss   // sass 变量
|   |   |   |-- _lib-reset.scss      // 重置样式
|   |   |   |-- index.scss           // main.js进入此scss包含以上所有
|   |   |-- js
|   |   |   |-- common               // 一些公用方法
|   |   |   |-- app                  // 模板核心操作方法
|   |   |       |--index.js          // 顶级类,作为其他方法的统一导出
|   |   |       |--baseComponents    // 基础组件
|   |   |       |--config            // 配置项-模板预置参数{debug: false,isMock:false}每个子组件可添加此配置项权重是url配置>组件配置>页面配置>全局默认配置(模板预置参数只接受运行时配置覆盖)
|   |   |       |--pageAdapt         // 提供页面适配操作方法
|   |   |       |--plugins           // VUE插件
|   |   |       |--state             // 提供动态注册状态方法state.regist(${key},${value})、更新状态state.update(key,value)、获取状态值方法state.getSate([key1,ke2.....])
|   |   |       |--utils             // 公共函数库
|   |   |-- font                     // 字体库文件夹
|   |-- components                   // vue公共组件
|   |   |--part
|   |   |  |--part.vue               // 基础布局组件part-接受属性part={}
|   |   |--charts                    // 图表组件
|   |-- pages                        // 所有页面
|   |   |-- baseLayout               // 基本布局demo
|   |   |-- communication            // 通信demo
|   |   |-- configuration            // 系统配置demo
|   |   |-- showContent              // 内容显示demo
|   |   |-- animation                // 动画序列demo
|   |-- router                       // 路由配置文件
|   |-- mock                         // mock 数据相关文件
|   |-- store                        // vuex相关文件
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
```

