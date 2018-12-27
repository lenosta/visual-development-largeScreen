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
|   |   |   |-- _diy-elementui.scss  //可以在这里重置element-ui样式
|   |   |   |-- _lib-base.scss       //页面基本处理样式,建议优先阅读一遍
|   |   |   |-- _lib-mixin.scss      //sass 宏
|   |   |   |-- _lib-variable.scss   //sass 变量
|   |   |   |-- _lib-reset.scss      //重置样式
|   |   |   |-- index.scss           //main.js进入此scss包含以上所有
|   |   |-- js
|   |   |   |-- common               //一些公用方法
|   |   |-- font                     // 字体库文件夹
|   |-- components                   // vue公共组件
|   |-- pages                        // 所有页面
|   |-- router                       // 路由配置文件
|   |-- store                        // vuex相关文件
|   |-- visus                        // 图表相关类
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
```
# 3.demo说明
 
