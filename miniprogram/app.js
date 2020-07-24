require('./libs/Mixins.js');

App({
  appUpdate: function(where) {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function(res) {
      // 请求完新版本信息的回调
      console.log(res)
      if (where == 'userclick') {
        wx.showToast({
          title: '已是最新版噢',
          icon: 'none'
        })
      }
    })
    updateManager.onUpdateReady(function() {
      wx.showModal({
        title: '小站求更新',
        content: "小站有版本功能更新啦，建议各位小可爱重启应用体验新版本(●'◡'●)",
        success: function(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function() {
      // 新版本下载失败
      wx.showToast({
        title: '嘤嘤嘤更新失败了。可能网络不好',
        duration: 1000
      });
    })
  }
})