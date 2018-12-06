export const config = {
  name: 'page2',
  parts: [
    {
      type: 'transverseDoubleBar',
      id: 'test1',
      className: 'test3',
      style: {
        width: '100%',
        height: '30%',
        left: '10%',
        top: '0'
      },
      html: '模板1'
    },
    {
      type: 'LineChart',
      id: 'test2',
      className: 'test1',
      style: {
        width: '100%',
        height: '30%',
        left: 0,
        top: '40%'
      },
      html: '模板1'
    },
    {
      type: 'plusLineChart',
      id: 'test3',
      className: 'test1',
      style: {
        width: '100%',
        height: '30%',
        left: 0,
        top: '70%'
      },
      html: '模板1'
    }
  ]
}
