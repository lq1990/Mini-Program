Page({
  data: {
    email: '',
    password: ''
  },

  bindEmailInput: function(e) {
    // console.log(e);
    this.setData({
      email: e.detail.value
    })
  },
  bindPasswordInput: function(e) {
    // console.log(e);S
    this.setData({
      password: e.detail.value
    })
  },

  login: function(e) {
    wx.showToast({
      title: '登录请求中...',
      icon: 'loading',
      duration: 3000
    });

    // 网络请求开始
    wx.request({
      url: 'https://postman-echo.com/get?email='+this.data.email+'&password='+this.data.password,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        wx.hideToast();
        console.log(res);
        if (res.data.args.email != "" && res.data.args.password !="") {
          // 进行一些状态的存储
          if(res.data.args.email == "abc@qq.com" && res.data.args.password== "123456")
          wx.switchTab({
            url: '../index/index',
            success: function() {
              console.log("called switchtab.");
            }
          })
        } else {
          wx.showModal({
            title: '登录失败',
            content: '请检查您填写的用户信息',
            showCancel: false,
            success: function(res) {
              // 回调函数
            }
          })
        }
      }
    })
  }
})