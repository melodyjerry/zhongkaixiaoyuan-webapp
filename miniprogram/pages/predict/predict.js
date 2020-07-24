wx.cloud.init()

const majors = ['全部','会计学', '金融学', '审计学', '法学', '广告学', '财务管理', '商务英语', '财政学', '英语', '汉语言文学', '经济学', '国际经济与贸易', '工商管理', '投资学', '税收学', '经济统计学', '翻译', '应用心理学', '新闻学', '市场营销', '国际商务', '人文地理与城乡规划', '日语', '文化产业管理', '人力资源管理', '自然地理与资源环境', '保险学', '资产评估', '编辑出版学', '公共事业管理', '行政管理', '社会工作', '酒店管理', '会展经济与管理', '旅游管理', '土地资源管理', '房地产开发与管理', '劳动与社会保障', '金融学(佛山全学段)', '广告学(佛山全学段)', '财务管理(佛山全学段)', '酒店管理(佛山全学段)', '法学(中外联合培养项目班)', '金融学(中外联合培养项目班)', '国际商务(中外联合培养项目班)',  '财务管理(中外联合培养项目班)'];

const majors1 = ['全部','会计学', '金融学', '审计学', '法学', '广告学', '财务管理', '商务英语', '财政学', '计算机科学与技术', '软件工程', '税收学', '数据科学与大数据技术', '计算机科学与技术(创新实验班)', '应用心理学', '国际经济与贸易', '经济学', '金融工程', '经济统计学', '工商管理', '数学与应用数学', '投资学', '国际商务', '汉语言文学', '资产评估', '市场营销', '电子商务', '行政管理', '统计学', '人力资源管理', '应用统计学', '新闻学', '编辑出版学', '酒店管理', '保险学', '旅游管理', '会展经济与管理', '物流管理', '文化产业管理', '徒弟资源管理', '人文地理与城乡规划', '房地产开发与管理', '自然地理与资源环境', '社会工作', '劳动与社会保障', '公共事业管理','金融学(佛山全学段)', '广告学(佛山全学段)', '财务管理(佛山全学段)', '酒店管理(佛山全学段)', '电子商务(佛山全学段)', '物流管理(佛山全学段)', '法学(中外联合培养项目班)', '金融学(中外联合培养项目班)', '国际商务(中外联合培养项目班)', '财务管理(中外联合培养项目班)'];

const majors2 = ['全部','环境设计', '视觉传达设计', '数字媒体艺术', '产品设计', '数字媒体艺术(佛山全学段)'];

Page({
  data: {
    show: false,
    majorInfo: '点击选择专业范围',
    radio: '文科',
    nowMajorsType : '文科',
    columns: majors,
    queryData : [],
    rateadmins : [] ,
    userrank : 0,
    info : [
      '不愧是你！',
      '录取几率很大呦。且此专业为热门专业，注意专业顺序的排列噢！',
      '录取几率很大。此专业去年第一志愿没有录满，注意专业顺序噢！',
      '比较稳噢，此专业为热门专业，注意专业顺序的排列噢！',
      '录取几率比较大，此专业去年第一志愿没有录满，第一志愿希望很大呦。',
      '排位高于去年排位，按照以往的情况，还是可以大胆填报的噢。此专业为热门专业，要注意专业顺序的排列噢！',
      '排位高于去年排位，且去年此专业第一志愿没有录满，放在第一志愿机会很大呦！',
      '低于去年的排位，冲报要填好保底志愿噢！',
      '该专业属于热门专业，差距大的话可能会录取不上，注意填好保底志愿噢！',
      '此专业去年第一志愿没有录满，差距大的话可能会录取不上呢，注意填好保底志愿噢！',
      '你的排位与此专业去年最低排位差距有点大呢，冲报要注意填好保底志愿噢。'
    ],
    infos : [],
    college : '',
    major : ''
  },

  
  onConfirm(event) {
    const { picker, value, index } = event.detail;
    console.log(`当前值：${value}, 当前索引：${index}`);
    this.setData({ 
      show: false,
      majorInfo : value,
      major : value
    });
    console.log("这是"+this.data.major)
  },

  onCancel() {
    this.setData({ show: false });
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onRankChange(event) {
    this.setData({
      userrank : event.detail
    })

    var rsNum = /^\d+$/.test(event.detail);
    if(!rsNum){
      setTimeout(()=>{
          wx.showToast({
              title: '排位只能是数字',
              icon: 'none'
          })
        },500)
    }
  },
  submit() {
 
    var rsNum= /^\d+$/.test(this.data.userrank);
    
    if(this.data.userrank == '') {
      wx.showToast({
        icon :'none',
        title: '请先输入您的排位',
      })
    }
    else if(!rsNum){
      setTimeout(()=>{
          wx.showToast({
              title: '排位只能是数字',
              icon: 'none'
          })
        },500)
    }
    else if(this.data.major == '') {
      wx.showToast({
        icon :'none',
        title: '请先选择专业范围',
      })
    }
    else {
      wx.showLoading({
        title: '查询中', 
      })

      
      wx.cloud.callFunction({
        name: 'searchMajor',
        data :{
          name : this.data.major,
          majorType : this.data.nowMajorsType
        },
        complete: res => {
          wx.hideLoading();
          wx.showToast({
            icon : 'success',
            title: '查询成功',
          })
          console.log(res)
          this.setData({
            queryData : res.result.data,
          })
          var rank;
          var that = this;
          for(var i = 0; i < this.data.queryData.length; i++) {
            var rankdiffer = this.data.queryData[i].lowestRank - this.data.userrank;
            var type = this.data.queryData[i].majorType;
            var rate = this.data.queryData[i].rate;

            rank = rankdiffer / this.data.queryData[i].lowestRank * 100
            var rateadminStr = 'rateadmins[' + i +'].rateadmin';
            that.setData({
              [rateadminStr]:rank
            })
            var rankInfo = 'infos[' + i +'].rankinfo';
            if(type == '理科') {
              if(rankdiffer >= 25000) {
                that.setData({
                  [rankInfo] : 'OMG！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[0] + '稳的。'
                })
              }
              else if(rankdiffer > 10000 && rankdiffer < 25000 && rate >= 90) {
                that.setData({
                  [rankInfo] : '不错呦！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[1]
                })
              }
              else if(rankdiffer >= 10000 && rankdiffer < 25000 && rate < 90) {
                that.setData({
                  [rankInfo] : '很不错呦！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[2]
                })
              }
              else if(rankdiffer >= 1000 && rankdiffer < 10000 && rate >= 90) {
                that.setData({
                  [rankInfo] : 'Good！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[3]
                })
              }
              else if(rankdiffer >= 1000 && rankdiffer < 10000 && rate < 90) {
                that.setData({
                  [rankInfo] : 'Good!' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[4]
                })
              }
              else if(rankdiffer >= 0 && rankdiffer < 1000 && rate >= 90) {
                that.setData({
                  [rankInfo] : '棒的！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[5]
                })
              }
              else if(rankdiffer >= 0 && rankdiffer < 1000 && rate < 90) {
                that.setData({
                  [rankInfo] : '棒的！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[6]
                })
              }
              else if(rankdiffer < 0 && rankdiffer > -500) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[7]
                })
              }
              else if(rankdiffer < -500 && rankdiffer > -3000 && rate >= 90) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[8]
                })
              }
              else if(rankdiffer < 3000) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[10]
                })
              }
              else if(rankdiffer < -500  && rate < 90) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[9]
                })
              }
              
            }
            else if(type == '文科') {
              if(rankdiffer >= 15000) {
                that.setData({
                  [rankInfo] : 'OMG！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[0] + '稳的。'
                })
              }
              else if(rankdiffer >= 3000 && rankdiffer < 15000 && rate >= 90) {
                that.setData({
                  [rankInfo] : '不错呦！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[1]
                })
              }
              else if(rankdiffer >= 3000 && rankdiffer < 15000 && rate < 90) {
                that.setData({
                  [rankInfo] : '很不错呦！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[2]
                })
              }
              else if(rankdiffer >= 1000 && rankdiffer < 3000 && rate >= 90) {
                that.setData({
                  [rankInfo] : 'Good！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[3]
                })
              }
              else if(rankdiffer >= 1000 && rankdiffer < 3000 && rate < 90) {
                that.setData({
                  [rankInfo] : 'Good!' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[4]
                })
              }
              else if(rankdiffer >= 0 && rankdiffer < 1000 && rate >= 90) {
                that.setData({
                  [rankInfo] : '棒的！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[5]
                })
              }
              else if(rankdiffer >= 0 && rankdiffer < 1000 && rate < 90) {
                that.setData({
                  [rankInfo] : '棒的！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[6]
                })
              }
              else if(rankdiffer < 0 && rankdiffer > -500) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[7]
                })
              }
              else if(rankdiffer < -500 && rankdiffer > -3000 && rate >= 90) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[8]
                })
              }
              else if(rankdiffer < 3000) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[10]
                })
              }
              else if(rankdiffer < -500  && rate < 90) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[9]
                })
              }  
            }
            else if(type == '艺术') {
              if(rankdiffer >= 2000) {
                that.setData({
                  [rankInfo] : 'OMG！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[0] + '稳的。'
                })
              }
              else if(rankdiffer >= 1000 && rankdiffer < 2000 && rate >= 90) {
                that.setData({
                  [rankInfo] : '不错呦！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[1]
                })
              }
              else if(rankdiffer >= 1000 && rankdiffer < 2000 && rate < 90) {
                that.setData({
                  [rankInfo] : '很不错呦！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[2]
                })
              }
              else if(rankdiffer >= 500 && rankdiffer < 1000 && rate >= 90) {
                that.setData({
                  [rankInfo] : 'Good！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[3]
                })
              }
              else if(rankdiffer >= 500 && rankdiffer < 1000 && rate < 90) {
                that.setData({
                  [rankInfo] : 'Good!' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[4]
                })
              }
              else if(rankdiffer >= 0 && rankdiffer < 500 && rate >= 90) {
                that.setData({
                  [rankInfo] : '棒的！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[5]
                })
              }
              else if(rankdiffer >= 0 && rankdiffer < 500 && rate < 90) {
                that.setData({
                  [rankInfo] : '棒的！' + '你的排名比去年最低排位高' + rankdiffer +'，'+ this.data.info[6]
                })
              }
              else if(rankdiffer < 0 && rankdiffer > -500) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[7]
                })
              }
              else if(rankdiffer < -500 && rankdiffer > -3000 && rate >= 90) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[8]
                })
              }
              else if(rankdiffer < 3000) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[10]
                })
              }
              else if(rankdiffer < -500  && rate < 90) {
                that.setData({
                  [rankInfo] : '你的排名比去年排位低' + -rankdiffer +'，'+ this.data.info[9]
                })
              }  
            }
          }
        }
      });

      // if(this.data.major == '全部') {
      //   // 查询已经在数据中的所有数据
      // db.collection('majors').where({
      //   majorType : this.data.nowMajorsType
      // }).get({
      //   success: res => {
      //     this.setData({
      //       queryData : res.data
      //     })
  
          // var rank;
          // var that = this;
          // for(var i = 0; i < this.data.queryData.length; i++) {
          //   var rankdiffer = this.data.queryData[i].lowestRank - this.data.userrank
          //   rank = rankdiffer / this.data.queryData[i].lowestRank * 100
          //   var rateadminStr = 'rateadmins[' + i +'].rateadmin';
          //   that.setData({
          //     [rateadminStr]:rank
          //   })
          //   var rankInfo = 'infos[' + i +'].rankinfo';
          //   if(rankdiffer > 10000) {
          //     that.setData({
          //       [rankInfo] : '你的排名比去年高' + rankdiffer +'，'+ this.data.info[0]
          //     })
          //   }
          //   else if(rankdiffer >= 1000 && rankdiffer < 10000) {
          //     that.setData({
          //       [rankInfo] : '你的排名比去年高' + rankdiffer +'，'+ this.data.info[1]
          //     })
          //   }
          //   else if(rankdiffer >= 0 && rankdiffer < 1000) {
          //     that.setData({
          //       [rankInfo] : '你的排名比去年高' + rankdiffer +'，'+ this.data.info[2]
          //     })
          //   }
          //   else if(rankdiffer < 0 && rankdiffer > -500) {
          //     that.setData({
          //       [rankInfo] : '你的排名比去年低' + -rankdiffer +'，'+ this.data.info[3]
          //     })
          //   }
          //   else {
          //     that.setData({
          //       [rankInfo] : '你的排名比去年低' + -rankdiffer +'，'+ this.data.info[4]
          //     })
          //   }
            
      //       console.log(this.data.rateadmins[i].rateadmin)
      //      console.log(this.data.radio)
      //     }
      //     wx.hideLoading();
      //     wx.showToast({
      //       icon : 'success',
      //       title: '查询成功',
      //     })
      //   },
      //   fail: err => {
      //     wx.hideLoading();
      //     wx.showToast({
      //       icon: 'none',
      //       title: '查询记录失败'
      //     })
      //   }
      // })
      // }
      // else {
      //   // 查询已经在数据中的一条数据
      // db.collection('majors').where({
      //   name : this.data.major,
      //   majorType : this.data.nowMajorsType
      // }).get({
      //   success: res => {
      //     this.setData({
      //       queryData : res.data
      //     })
  
      //     var rank;
      //     var that = this;
      //     for(var i = 0; i < this.data.queryData.length; i++) {
      //       var rankdiffer = this.data.queryData[i].lowestRank - this.data.userrank
      //       rank = rankdiffer / this.data.queryData[i].lowestRank * 100
      //       var rateadminStr = 'rateadmins[' + i +'].rateadmin';
      //       that.setData({
      //         [rateadminStr]:rank
      //       })
      //       var rankInfo = 'infos[' + i +'].rankinfo';
      //       if(rankdiffer > 10000) {
      //         that.setData({
      //           [rankInfo] : '你的排名比去年高' + rankdiffer +'，'+ this.data.info[0]
      //         })
      //       }
      //       else if(rankdiffer >= 1000 && rankdiffer < 10000) {
      //         that.setData({
      //           [rankInfo] : '你的排名比去年高' + rankdiffer +'，'+ this.data.info[1]
      //         })
      //       }
      //       else if(rankdiffer >= 0 && rankdiffer < 1000) {
      //         that.setData({
      //           [rankInfo] : '你的排名比去年高' + rankdiffer +'，'+ this.data.info[2]
      //         })
      //       }
      //       else if(rankdiffer < 0 && rankdiffer > -500) {
      //         that.setData({
      //           [rankInfo] : '你的排名比去年低' + -rankdiffer +'，'+ this.data.info[3]
      //         })
      //       }
      //       else {
      //         that.setData({
      //           [rankInfo] : '你的排名比去年低' + -rankdiffer +'，'+ this.data.info[4]
      //         })
      //       }
            
      //       console.log(this.data.rateadmins[i].rateadmin)
      //      console.log(this.data.radio)
      //     }
      //     wx.hideLoading();
      //     wx.showToast({
      //       icon : 'success',
      //       title: '查询成功',
      //     })
      //   },
      //   fail: err => {
      //     wx.hideLoading();
      //     wx.showToast({
      //       icon: 'none',
      //       title: '查询记录失败'
      //     })
      //   }
      // })
      // }
    }
  },
  

  onClick(event) {
    const { name } = event.currentTarget.dataset;
    
    this.setData({
      radio: name,

    });
    if(this.data.radio == "文科") {
      this.setData({
        columns : majors,
        nowMajors : majors,
        nowMajorsType : '文科'
      })
    }
    else if(this.data.radio == "理科") {
      this.setData({
        columns : majors1,

        nowMajorsType : '理科'
      })
    }
    else if(this.data.radio == "艺术") {
      this.setData({
        columns : majors2,
        nowMajorsType : '艺术'
      })
    }
  },

  onLoad: function (options) {
    wx.showModal({
      title: '使用须知',
      content: '本功能数据仅供参考，请勿作为填报志愿的主要参考来源，具体数据请以招生考试机构为准。与此产生的任何后果与运营方无关。',
      showCancel: false
    })
  },
});