// pages/school/school.js
Page({
 
  
  data: {
    piture : [
    {
      id : '1',
      imageurl1 : 'https://s1.ax1x.com/2020/07/23/Uq1B9J.png',
      imageurl2 : 'https://s1.ax1x.com/2020/07/23/Uq1ojI.png',
      imageurl3 : 'https://s1.ax1x.com/2020/07/23/Uq17ut.png',
      title: '广东省分专业招生计划（招生代码：11347）'
    }]
    // {
    //   id : '2',
    //   imageurl : 'https://note.youdao.com/yws/api/personal/file/WEB6d8f6733a93e7cce490813ff2fff3ba8?method=download&shareKey=d9cb0a2c08b8541b22347ebc07850955',
    //   title: '省外分专业招生计划'
    // },
    // {
    //   id : '3',
    //   imageurl : 'https://note.youdao.com/yws/api/personal/file/WEBa3235428d2456fce7b9639b7994f6c61?method=download&shareKey=822926f8e0f3c662cd0c8a34f582f862',
    //   title: '中外联合培养项目班招生计划（招生代码：70592）'
    // },
    // {
    //   id : '4',
    //   imageurl : 'https://note.youdao.com/yws/api/personal/file/WEBdd91b7534bb4b49cc0818fa524fd5e88?method=download&shareKey=11d5195ff04ed66157d327438e3bc2c9',
    //   title: '地方专项计划（招生代码：30592）'
    // }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  showDetails : function(event) {
    var currenturl = event.currentTarget.dataset.url;
    wx.previewImage({
      urls: [currenturl],
    })
  },


  onLoad: function (options) {
    wx.showToast({
      title: '数据加载中',
      duration : 1500,
      icon : "loading"
    })
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