// pages/learn/url.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urls : [
      
      {
        name :'信息门户',
        url : 'http://my.gdufe.edu.cn/',
        info : '账号是学号，初始密码是身份证后六位，如果带x就往前推一位，更改密码后要记住密码'
      },{
        name : '广财VPN',
        url : 'https://vpn.gdufe.edu.cn/',
        info : '与信息门户账号密码一致'
      },
      {
        name :'教务系统（选课系统）',
        url : 'http://jwxt.gdufe.edu.cn/jsxsd/',
        info : '与信息门户账号密码一致'
      },
      {
        name : '缴费网址（学费学分费缴纳）',
        url : 'http://finmanage.gdufe.edu.cn:8804/index.html',
        info : '账号是学号或者身份证，初始密码是888888'
      },
      {
        name : '网络教学平台（慕课）',
        url:'http://gdcj.fanya.chaoxing.com/',
        info : '与信息门户账号密码一致'
      },
      {
        name : '毕博平台',
        url : 'https://bb.gdufe.edu.cn/',
        info : '与信息门户账号密码一致'
      },
      {
        name :'素拓系统',
        url : 'http://sztz.gdufe.edu.cn/sztz/login.jsp?failed=usernameEmpty',
        info : '与信息门户账号密码一致'
      }
    ]
  },

  copyUrl :function(event) {
    var url= event.currentTarget.dataset.url;
    wx.setClipboardData({
      data: url,
      success(){
        wx.showToast({
          title: '网址已复制',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})