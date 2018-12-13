import $ from './common/extend'
/**
 * 页面类
 * {
        type: 'transverseSingleBar',
        id: 'test1',
        className: 'test3',
        style: {
          width: '30%',
          height: '30%',
          left: '2%',
          top: '50px'
        },
        html: '模板1'
      },
 */
export default class Page{
    constructor(opt){
        let _opt = {
            type: 'transverseSingleBar',
            id: 'test1',
            className: 'test3',
            style: {
              width: '30%',
              height: '30%',
              left: '2%',
              top: '50px'
            },
            html: '模板1'
          }
          
        $.extend(this,_opt,opt)
    }
}