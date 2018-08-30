// pages/setUp/setUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginStage:false
  },
  loginStage:function(){
      wx.navigateTo({
        url: '../login/login',
      })
  },
  gerUserInfo:function(){
    console.log(getApp())
    wx.getStorage({
      key: getApp().userName,
      success: function (data) {
        console.log(data)
      }
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
    console.log(getApp())
    if (getApp().loginStage==1){
      this.setData({
        loginStage:true
      })
      
    }else{
      this.setData({
        loginStage: false
      })
    }
  },
  getUserInfo:function(){

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