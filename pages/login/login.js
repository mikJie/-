Page({
  data: {
    essage:'登录失败',
    showView:'hide',
    txt:'',
    password:''
  },
  onLoad:function(options){
    wx.getStorage({
      key: 'sanyun001',
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  dneglu:function(e){
    console.log(e)
    this.data.txt = e.detail.value;
  },
  zhuce:function(e){
    console.log(e.detail.value)
    this.data.password = e.detail.value;
  },
  register:function(){
    wx.navigateTo({
      url: '../register/register'
    })
  },
  Btnheaf:function(){
    console.log(this.data.txt)
    var that = this;
    wx.getStorage({
      key: this.data.txt,
      success: function (res) {
        if(that.data.password!=''){
          if (that.data.password == res.data.password){
            wx.getStorage({
              key: that.data.txt,
              success: function (res) {
                console.log(res.data)
                res.data.loginStage = 1;
                wx.setStorage({
                  key: that.data.txt,
                  data: res.data,
                  success:function(){
                    getApp().loginStage = res.data.loginStage;
                    getApp().userName = res.data.name;
                    wx.switchTab ({
                      url: '../home/home',
                    })
                  }
                })
              }
            })
           
          }else{
            wx.showModal({
              title: '提示',
              content: '用户名和密码不匹配! ',
              showCancel: false,
              confirmText: '关闭',
            })
          }
        }else{
          wx.showModal({
            title: '提示',
            content: '密码不能为空！',
            showCancel: false,
            confirmText: '关闭',
          })
        }
      },
      fail:function(){
        wx.showModal({
          title: '提示',
          content: '当前用户名不存在',
          showCancel:false,
          confirmText:'关闭',
        })
      }
    })
  }
})