wx.cloud.init()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : '',
    majorType :'文科',
    lowestRank : '',
    lowestScore : '',
    rate: '',
    rateValue : ''
  },

  onNameChange(event) {
    this.setData({
      name : event.detail
    })
  },
  onRankChange(event) {
    this.setData({
      lowestRank : event.detail
    })
  },
  onScoreChange(event) {
    this.setData({
      lowestScore : event.detail
    })
  },
  onRateChange(event) {
    this.setData({
      rate : event.detail
    })
  },
  onRateValueChange(event) {
    this.setData({
      rateValue : event.detail
    })
  },

  submit() {
    if(this.data.name == '' || this.data.lowestRank == '' || this.data.lowestScore == '' || this.data.rate == '' || this.data.rateValue == '') {
      wx.showToast({
        icon: 'none',
        title: '还有数据为插入',
      })
    }
    else {
     
    wx.cloud.callFunction({
      name : 'addMajor',
      data: {
        name : this.data.name,
        majorType : this.data.majorType,
        lowestRank : this.data.lowestRank,
        lowestScore : this.data.lowestScore,
        rate : this.data.rate,
        rateValue : this.data.rateValue
      },
      complete: res => {
        console.log('callFunction test result: ', res)
        wx.showModal({
          title: '成功',
          content: '成功插入记录',
          showCancel: false
        })
      }
    })
  }
    console.log(this.data.name)
    console.log(this.data.lowestRank)
    console.log(this.data.lowestScore)
    console.log(this.data.rate)
    console.log(this.data.rateValue)
    console.log(this.data.majorType)
  },

  clear() {
    this.setData({
      name : '',
    majorType :'文科',
    lowestRank : '',
    lowestScore : '',
    rate: '',
    rateValue : ''
    })
  },
  onChange(event) {
    this.setData({
      majorType: event.detail,
    });
  },

  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      majorType: name,
    });
  },
  copyFoShan(event) {
    wx.setClipboardData({
      data: event.currentTarget.dataset.info1,
    })
  },
  copyZhongWai(event) {
    wx.setClipboardData({
      data: event.currentTarget.dataset.info2,
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