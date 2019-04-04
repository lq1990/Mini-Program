//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
    console.log("logs page execute: onLoad.");
  },
  onReady: function() {
    console.log("logs page execute: onReady.");
  },
  onShow: function() {
    console.log("logs page execute: onShow.");
  },
  onHide: function () {
    // 暂时隐藏，比如用户在玩游戏，或订单。需要保存状态，比如保存游戏进度
    console.log("logs page execute: onHide.");
  },
  // 页面关闭时
  onUnload: function () {
    console.log("logs page execute: onUnload.");
  },
  onPullDownRefresh: function () {
    console.log("logs page execute: onPullDownRefresh.");
  },
  onReachBottom: function () {
    console.log("logs page execute: onReachBottom.");
  }
})
