// pages/schoolhandbook/cost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    costInfo : [{
      info : '住宿费收费标准500～1500元/生/学年，按实际住宿标准收取。各专业具体学费见下图:',
      imageurl : 'https://s1.ax1x.com/2020/07/23/UqJZ8g.png',
    }],
    reward : [{
      info : '①优秀新生奖学金。第一志愿组报考我校被录取并已入学注册的广东省新生，其高考成绩排位为我校文科、理科或艺术类的第一名考生各奖励1万元。',
    }, {
      info : '②综合测评奖学金。每年按在校生的18%比例奖励，每人400～1200元。',
    }, {
      info : '③仲明助学金。每年资助20名，每人5000元。',
    }, {
      info : '④提供勤工助学岗位。学校为家庭经济困难学生提供一定数量的校内勤工助学岗位，以解决部分学生生活费。',
    }, {
      info : '⑤国家励志奖学金的奖励对象为我校全日制在校本科二年级以上（含二年级）学生中品学兼优的家庭经济困难学生，奖励标准为每人每年5000元；',
    }, {
      info : '⑥国家奖学金的奖励对象为我校全日制在校本科二年级以上（含二年级）学生中德、智、体、美各方面表现特别优秀的学生，奖励标准为每人每年8000元；',
    }, {
      info : '⑦国家助学金的资助对象为我校全日制在校本科学生中家庭经济困难的学生，资助标准为每人每年2000-4000元。',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showDetails : function(event) {
    var currenturl = event.currentTarget.dataset.url;
    wx.previewImage({
      urls: [currenturl],
    })
  },
    //预览图片，放大预览
    preview(event) {
      console.log(event.currentTarget.dataset.src)
      let currentUrl = event.currentTarget.dataset.src
      wx.previewImage({
        current: currentUrl, // 当前显示图片的http链接
        urls: this.data.imgList // 需要预览的图片http链接列表
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