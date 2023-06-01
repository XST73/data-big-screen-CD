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
        data1: [80, 152, 101, 134, 90, 130],
        data2: [120, 182, 191, 210, 170, 110],
        data3: [110, 132, 201, 154, 150, 80],
        data4: [90, 142, 161, 114, 190, 170],
        xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
        barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
      },
    },
  },
};
