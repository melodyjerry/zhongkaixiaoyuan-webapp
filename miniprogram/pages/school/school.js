// pages/school/school.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    
    pages: ['用电相关', '网络相关', '医疗相关', '餐饮相关','快递相关'],
    schoolInfos : [
      '仲恺农业工程学院是一所以农、工学科为优势，农、工、理、经、管、文、艺、法等多学科协调发展的省属本科大学。',
      '学校前身为仲恺农工学校，是第一次国共合作时期，近代民主革命先驱何香凝先生等提议、国民党中央为纪念廖仲恺先生爱护农工的意愿而决定创办的。',
      '学校于1927年招生，何香凝先生首任校长15年。',
      '1984年，经教育部、农牧渔业部批准，学校升格为本科院校，定名“仲恺农业技术学院”，国家副主席王震同志题写校名。',
      '2008年3月，经教育部批准，更名“仲恺农业工程学院”。',
      '学校坐落在历史文化名城广州，有海珠、白云两个校区，校园总面积2000余亩。校园集云山之神秀，汇珠水之灵气，是读书治学的理想园地。',
      '拥有博士后科研工作站1个、一级学科硕士学位授权学科9个、硕士专业学位类别5个、本科专业55个（其中，省级以上特色专业9个）。'
    ],
    schoolmotto : "注重实践，扶助农工。",
    schoolmusic : "{暂无}",
    schoollogo : "3.学校校徽：",
    musicPlay : false
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
  //校歌
  playMusic: function(ev) {
        var shifouplay = this.data.shifouplay;    
        if (shifouplay) {
          wx.pauseBackgroundAudio()
          this.setData({
            shifouplay: false
          })
        } else {
          wx.playBackgroundAudio({
    //         dataUrl: 'https://aod.cos.tx.xmcdn.com/group61/M05/2B/19/wKgMZl0iqrSTTRlhAAvBDywNpqA356.m4a',
            title: '仲恺农业工程学院校歌',
            //coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
          })
          this.setData({
            shifouplay: true
          })
        }
    
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