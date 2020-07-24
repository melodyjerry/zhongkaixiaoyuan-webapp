// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('majors').add({
    data: {
      name : event.name,
      majorType : event.majorType,
      lowestRank : event.lowestRank,
      lowestScore : event.lowestScore,
      rate : event.rate,
      rateValue : event.rateValue
    }
   })
}