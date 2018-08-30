// pages/BWL/BWL.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginStage:false
  },
  
  loginBtn:function(){
    wx.navigateTo({
      url: '../login/login',
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
    //获得dialog组件
    // this.dialog = this.selectComponent("#header");
    //this.dialog = this.selectComponent("#footer");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    console.log(getApp())
    if (getApp().loginStage == 1) {
      this.setData({
        loginStage: true
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请先进行登录! ',
        confirmText:'登录',
        success:function(res){
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login',
            })
          } else{
            that.setData({
              loginStage: false
            })
          }
        }
      })
    }
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