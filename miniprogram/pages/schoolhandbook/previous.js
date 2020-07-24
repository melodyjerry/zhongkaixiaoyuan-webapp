// pages/school/school.js
Page({
 
  
  data: {
    piture : [{
      id : '1',
      imageurl1 : 'https://s1.ax1x.com/2020/07/23/Uq8Zo8.png',
      imageurl2 : 'https://s1.ax1x.com/2020/07/23/Uq8uWQ.png',
      title: '2017-2019年本科招生录取情况（广东省）'
    }]
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

  copyPhone: function() {
    wx.setClipboardData({
      data: '020-84096844',
      success() {
        wx.showToast({
          title: '电话已复制'
        });
      }
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