// pages/handbook/antifraud.js
Page({

  data: {
    piture : [{
      id : '1',
      imageurl1 : 'https://s1.ax1x.com/2020/07/23/Uq8Zo8.png',
      imageurl2 : 'https://s1.ax1x.com/2020/07/23/Uq8uWQ.png',
      title: '2017-2019年本科招生录取情况（广东省）'
    },
    {
      id : '2',
      imageurl1 : 'https://s1.ax1x.com/2020/07/23/Uq8o0P.png',
      imageurl2 : 'https://s1.ax1x.com/2020/07/23/Uq8TTf.png',
      title: '2017-2019年本科招生录取情况（广东省外）'
    }]
  },

  /**
   * 页面的初始数据
   */
  data: {
    consult : [{
      number : '985969445',
      info : '仲恺招新咨询群：985969445'
    }]
  },
  copyNumber : function(event) {
    var num = event.currentTarget.dataset.num;
    wx.setClipboardData({
      data: num,
      success(){
        wx.showToast({
          title: '群号已复制',
        })
      }
    })
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