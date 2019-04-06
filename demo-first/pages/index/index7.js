var app = getApp();
Page({
  data: {
    // 数据绑定，数据在data这里
    motto: "hello world wow!",
    userid: 1234,
    show: false,
    array: [{
        message: "my msg: hello"
      },
      {
        message: "my msg: world"
      },
      {
        message: "my msg: !"
      }
    ],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2019-04-05'
    },
    itemb: {
      index: 1,
      msg: 'this is b template',
      time: '2019-04-05'
    }
  },
  onLoad: function() {

  },
  onShow: function() {

  }
})