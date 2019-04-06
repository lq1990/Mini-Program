var app = getApp();
Page({
  data: {
    newsdata: ''
  },
  
  loadData: function() {
    var that = this;
    wx.request({
      url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c55c5a692dcd4a218bf51dbb53b46eb6',
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.articles);
        that.setData({
          newsdata: res.data.articles
        });
      }
    })
  }
})