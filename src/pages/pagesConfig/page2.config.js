
export default {
    name: 'page2',
    parts: [
      {
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
      {
        type: 'LineChart',
        id: 'test2',
        className: 'test1',
        style: {
          width: '30%',
          height: '30%',
          left: '34%',
          top: '50px'
        },
        html: '模板1'
      },
      {
        type: 'plusLineChart',
        id: 'test3',
        className: 'test1',
        style: {
          width: '30%',
          height: '30%',
          left: '66%',
          top: '50px'
        },
        html: '模板1'
      }
    ]
}