// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {

  if(event.name == '全部') {
    return await db.collection('majors').where({
        majorType : event.majorType,
     }).get({
      success: function (res) {
        return res
      }
    });
  }
  else {
    return await db.collection('majors').where({
        name : event.name,
        majorType : event.majorType,
     }).get({
      success: function (res) {
        return res
      }
    });
  }
  
}