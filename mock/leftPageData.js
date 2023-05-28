// 左侧界面数据
module.exports = {
  'GET /api/leftPageData': {
    accessFrequency: 1500,
    peakFlow: 300,
    trafficSitua: {
      timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
      outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
      inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
    },
    userSitua: {
      header: ['用户', '时间', '状态'],
      data: [
        ['用户1', '2020-11-11 12:00', '在线'],
        ['用户2', '2020-11-11 12:00', '离线'],
        ['用户3', '2020-11-11 12:00', '在线'],
        ['用户4', '2020-11-11 12:00', '在线'],
        ['用户5', '2020-11-11 12:00', '在线'],
        ['用户6', '2020-11-11 12:00', '离线'],
        ['用户7', '2020-11-11 12:00', '在线'],
        ['用户8', '2020-11-11 12:00', '在线'],
        ['用户9', '2020-11-11 12:00', '离线'],
        ['用户11', '2020-11-11 12:00', '离线'],
        ['用户12', '2020-11-11 12:00', '离线'],
        ['用户13', '2020-11-11 12:00', '离线'],
      ],
    },
  },
};
