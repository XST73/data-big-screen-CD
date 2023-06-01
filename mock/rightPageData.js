// 右侧界面数据
module.exports = {
  'GET /api/rightPageData': {
    browseCategories: {
      data: [6554.2, 1329.8, 5288.0, 1323.0, 2930.0, 2367.8, 1933.0, 525.4],
      indicator: [
        { max: 8000, name: '食品' },
        { max: 3000, name: '衣着' },
        { max: 6000, name: '居住' },
        { max: 3000, name: '生活' },
        { max: 3500, name: '交通' },
        { max: 3000, name: '文娱' },
        { max: 3000, name: '医疗' },
        { max: 3000, name: '其他' },
      ],
    },
    userIdentityCategory: {
      data: [
        {
          name: '工资性收入',
          value: 6554,
        },
        {
          name: '经营净收入',
          value: 1330,
        },
        {
          name: '财产净收入',
          value: 5288,
        },
        {
          name: '转移净收入',
          value: 1323,
        },
      ],
    },
    offline: {
      feedback: [
        {
          title: '食品衣着',
          number: 35,
        },
        {
          title: '交通教育',
          number: 24,
        },
        {
          title: '居住生活',
          number: 40,
        },
      ],
      offlinePortalData: {
        data1: [6920,7422,7635,8597,8846],
        data2: [5870,6336,6475,7060,7314],
        data3: [4901,5375,4794,5755,5664],
        data4: [2162,2426,2305,2684,2715],
        xData: ['2018', '2019', '2020', '2021', '2022'],
        barData: [4963.25,5389.75,5302.25,6024,6134.75],
      },
    },
  },
};
