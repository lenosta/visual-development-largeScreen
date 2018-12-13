import $ from './common/extend'
/**
 * 页面部件类
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
阿迪sss短s发呆发呆
export default class Part{
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