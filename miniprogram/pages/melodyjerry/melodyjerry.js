// pages/melodyjerry/melodyjerry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  copyWeChat : function() {
    wx.setClipboardData({
      data: 'MelodyJerry',
      success() {
        wx.showToast({
          title: '微信号已复制',
        })
      }
    })
  },
  copyQQ : function() {
    wx.setClipboardData({
      data: '',
      success() {
        wx.showToast({
          title: 'QQ号已复制',
        })
      }
    })
  },

  copyEmail : function() {
    wx.setClipboardData({
      data: 'melodyjerry@qq.com',
      success() {
        wx.showToast({
          title: '邮箱已复制',
        })
      }
    })
  },

  copyBlog : function() {
    wx.setClipboardData({
      data: 'https://melodyjerry.gitee.io',
      success() {
        wx.showToast({
          title: '博客链接已复制',
        })
      }
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