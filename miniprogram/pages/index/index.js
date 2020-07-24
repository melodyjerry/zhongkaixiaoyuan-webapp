Page({
  data: {
      list: [
          {
              id: 'school',
              name: '学校说明',
              open: false,
              pages: ['学校简介', '学院机构'],
              urls : ['../school/school', '../school/college']
          },
          {
            id: 'schoolhandbook',
            name: '报考指南',
            // pages: ['招生概况','招生计划', '往年情况', '费用情况', '报考小建议', '报考咨询群'],
            // urls : ['../schoolhandbook/recruit','../schoolhandbook/plan', '../schoolhandbook/previous', '../schoolhandbook/cost', '../schoolhandbook/suggestion',"../schoolhandbook/consult",]
            pages: ['招生概况','招生计划', '往年情况', '费用情况', '报考咨询群'],
            urls : ['../schoolhandbook/recruit','../schoolhandbook/plan', '../schoolhandbook/previous', '../schoolhandbook/cost', "../schoolhandbook/consult",]
          },
          {
              id: 'handbook',
              name: '新生指南',
              pages: ['来校路线', '防偷防骗', '宿舍一角', "饭堂一角", "新生军训"],
            //   urls : ['../handbook/route', '../handbook/antifraud', '../handbook/dorm',  '../handbook/canteen' ,'../handbook/miltrain']
          },
        //   {
        //     id: 'learn',
        //     name: '学习生活',
        //     pages: ['时间相关', '课程相关', '常用网址', '趣拓相关', '转专业信息','辅修专业信息' ,'社团全览'],
            // urls : ['../learn/time', '../learn/course', '../learn/url', '../learn/diathesis', '../learn/major', '../learn/minor','../learn/league']
        // },
          {
            id: 'life',
            name: '校园生活',
            pages: ['用电相关', '网络相关', '医疗相关', '餐饮相关','快递相关','校区地图'],
            // urls : ['../life/electric', '../life/wifi', '../life/treament', '../life/eat', '../life/deliver','../life/map']
        },
        // {
        //     id: 'caidan',
        //     name: '小彩蛋',
        //     pages: [ '高考预测'],
        //     urls : ['../predict/predict']
        // },
      ]
  },
  kindToggle: function (e) {
      var id = e.currentTarget.id, list = this.data.list;
      for (var i = 0, len = list.length; i < len; ++i) {
          if (list[i].id == id) {
              list[i].open = !list[i].open
          } else {
              list[i].open = false
          }
      }
      this.setData({
          list: list
      });
  },
  openAbout: function(){
      wx.navigateTo({
        url: '../about/about',
      })
  }
});
