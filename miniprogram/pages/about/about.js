// pages/features/about.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    verson : '1.0.1',
    width: '100%',
    height: '',
    //开发者
    coder: [{
      id : 'MelodyJerry',
      avatar: 'https://i.loli.net/2020/02/10/6yndjPI2rHL94vJ.png',
      nickName: 'MelodyJerry'
    }],
    //贡献者
    devote: [{
      // avatar: 'https://note.youdao.com/yws/api/personal/file/WEB54d1006c1620674f3a899b04223d8143?method=download&shareKey=8a2b7ad23bd2e8f6c9381dcfb1310020',
      // nickName: 'WindrunnerMax'
    }, {
      avatar: '',
      nickName: ''
    }, {
      // avatar: '贡献者',
      // nickName: '贡献者'
    }],
    // otherApps: [{
    //   appid: 'wx183616af30e5723d',
    //   icon: 'https://z4a.net/images/2019/10/17/basicprofile.th.png',
    //   name: '贝壳班车订票'
    // }, {
    //   appid: 'wx9551f8196258f706',
    //   icon: 'https://z4a.net/images/2019/10/17/1f4934ff45c2510c249666a909acf02c.png',
    //   name: '珠江小盒子'
    // }]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      width: wx.getSystemInfoSync().windowWidth * 0.9 + 'px',
      height: wx.getSystemInfoSync().windowWidth * 0.9 * 0.5625 + 'px'
    })
    wx.pageScrollTo({
      scrollTop: 1600,
      duration: 4000,
    })
    setTimeout(function() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      })
    }, 4000);
  },
  copyID: function() {
    wx.setClipboardData({
      data: 'wx4b9a016e4016c3a6',
      success() {
        wx.showToast({
          title: '已复制到粘贴版,请到公众号平台进行关联'
        });
      }
    })
  },

  copyQQGroup : function() {
    wx.setClipboardData({
      data: 'test',
      success(){
        wx.showToast({
          title: '群号已复制',
        })
      }
    })
  },
//关于页，点击开发者，进入开发者信息
  avatardetail : function(event) {
    var avatarindex = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../'+ avatarindex +'/' + avatarindex,
    })
    console.log(avatarindex)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  showAppCode: function() {
    wx.previewImage({
      // current: '/images/code.jpg', // 当前显示图片的http链接
      // urls: ['/images/code.jpg'] // 需要预览的图片http链接列表
    })
  },
  goOtherApps: function(e) {
    var appid = e.currentTarget.dataset.appid;
    wx.navigateToMiniProgram({
      appId: appid,
      success(res) {
        // 打开成功
      }
    })
  },
  checkUpdate:function(){
    app.appUpdate('userclick');
  }
})