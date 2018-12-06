export const config = [
  {
    componentName: 'transverseDoubleBar',
    bid: 'test1',
    className: 'test1',
    size: {
      width: '40%',
      height: '30%'
    },
    position: {
      left: '10%',
      top: '10%'
    },
    template: '模板1',
    callBack: () => {
      console.log('回调执行')
    },
    isMounted:false
  },
  {
    componentName: 'LineChart',
    bid: 'test2',
    className: 'test2',
    size: {
      width: '40%',
      height: '30%'
    },
    position: {
      left: '10%',
      top: '60%'
    },
    template: '<h1>模板2</h1>',
    isMounted:false
  }
]
