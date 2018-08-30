Page({
  data: {
    motto: 'Hello World',
    content: [{
      name:'姓名:',
      id:'1',
      type:'text',
      showview:'',
      showFlag:false
    }, {
        name: '账户名称:',
      id: '2',
      type: 'text',
      showview: '',
      showFlag: false
      }, {
        name: '密码:',
        id: '3',
        type: 'number',
        showview: '',
        showFlag: false
    }, {
        name: '确认密码:',
      id: '4',
      type: 'number',
      showview: '',
      showFlag: false
      }, {
        name: '手机号:',
        id: '5',
        type: 'number',
        showview: '',
        showFlag: false
    }, {
        name: '邮箱:',
      id: '6',
      type: 'digit',
      showview: '',
      showFlag: false
    }],
    userDetail:{
      username:'',
      name: '',
      password: '',
      againpassword: '',
      tel: '',
      email: '',
      loginStage:0
    },
    showview:'',
    showId:'0',
    // flagNum:0,
    // showFlag:false
  },
  commentFun:function(Name,value,title,id){
    console.log(Name)
    if (value!='') {
      this.data.userDetail[Name] = value;
      console.log(this.data.userDetail)
      console.log(this)
      return true
    }else{
      this.data.content[id - 1].showview = title + '不能为空!';
      this.setData({
        content:this.data.content
      })
    }
  },
  inputSuccess:function(id,Name,value){
    //this.data.userDetail[Name] = value;
    this.data.content[id - 1].showview = '';
    this.data.content[id - 1].showFlag = true;
    this.setData({
      content: this.data.content
    })
  },
  getUserDetail:function(e){
    var id = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.name;
    var value = e.detail.value;
    this.setData({
      showId: id
    })
    console.log(value.length)
    switch(id){
      case '1': if (this.commentFun('username', value, title,id) == true){
        this.inputSuccess(id, 'username', value);
        console.log(this.data.flagNum)
      }
        break;
      case '2': if (this.commentFun('name', value, title,id) == true){
        this.inputSuccess(id, 'name', value);
      }
        break;
      case '3': if (this.commentFun('password', value, title,id)==true){
        if (value.length < 6) {
          this.data.content[id - 1].showview = '密码长度不能小于六位';
          this.data.content[id - 1].showFlag = false;
          this.setData({
            content: this.data.content
          })
        } else {
          this.inputSuccess(id, 'password', value);
        }
      }
        break;
      case '4': if (this.commentFun('againpassword', value, title,id) == true) {
        if (this.data.userDetail.password != value){
          this.data.content[id - 1].showview = '两次输入的密码不一致';
          this.data.content[id - 1].showFlag = false;
          this.setData({
            content: this.data.content
          })
        }else{
          this.inputSuccess(id, 'againpassword', value);
        }
      }
        break;
      case '5': if (this.commentFun('tel', value, title,id) == true) {
        if (value.length!=11) {
          this.data.content[id - 1].showview = '手机号码格式不正确';
          this.data.content[id - 1].showFlag = false;
          this.setData({
            content: this.data.content
          })
        }else{
          this.inputSuccess(id, 'tel', value);
        }
       
      }
        break;
      case '6': if (this.commentFun('email', value, title,id) == true){
        this.inputSuccess(id, 'email', value);
      }
        break;
    }
    console.log(this.data.userDetail)
  },
  registerBtn:function(){
    var num = 0;
    for (var i = 0; i<this.data.content.length; i++){
      if (this.data.content[i].showFlag==true){
          num++
      }
    }
    if (num==6){
      console.log(this.data.userDetail)
      wx.setStorage({
        key: this.data.userDetail.name,
        data: this.data.userDetail,
        success:function(){
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            success: function () {
              wx.navigateTo({
                url: '../login/login',
              })
            }
          })
        }
      })
    }else{
      wx.showToast({
        title: '请完善您的信息',
        icon: 'none',
        duration: 2000
      })
    }
  }
})