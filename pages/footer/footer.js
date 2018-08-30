Component({
  data:{
    list:[
      {
        id:0,
        name:'主页',
        icon:'icon-shouye',
        heaf:'../home/home'
      },
      {
        id:1,
        name: '备忘录',
        icon: 'icon-beiwanglu',
        heaf: '../BWL/BWL'
      },
      {
        id:2,
        name: '图片',
        icon: 'icon-tupian',
        heaf: '../imgcool/imgcool'
      },
      {
        id:3,
        name: '设置',
        icon: 'icon-shezhi',
        heaf: '../setUp/setUp'
      }
    ],
    _num:''
  },
  methods:{
    heafOther: function (e) {
      console.log(e)
      var that = this;
      console.log(this)
      var id = e.currentTarget.dataset.id;
      for (var i = 0; i < this.data.list.length; i++){
        if (id == this.data.list[i].id){
           wx.navigateTo({
             url: that.data.list[i].heaf,
             success:function(){
               console.log(that)
               that.setData({
                 _num: id
                })
             }
           })
        }
      }
    }
  }
})