App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航数据
    currentIndex:0,
    navList:[],
    swiperList:[],
    videosList:[]
  },
  activeNav(e){
this.setData({
    currentIndex:e.target.dataset.index
})
  
  },
  //获取视频列表数据
getvideosList(){
  let that=this;
wx.request({
  url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
  success(res){
    if(res.data.code===0){
      that.setData({
        videosList:res.data.data.videoList
    })
    }
    
  }
})
  },
  //获取轮播图数据
getSwiperList(){
  let that=this;
  wx.request({
    url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
    success(res){
      if(res.data.code===0){
        that.setData({
        swiperList:res.data.data.swiperList
      })
      }
    }
  })
},
//获取首页的导航数据
getNavList(){
  let that=this;
  //小程序内置发送请求方法
  wx.request({
    url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
    success(res){
      if(res.data.code===0){
        that.setData({
          navList:res.data.data.navList
        })  
      }
    }
  })},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList()
    this.getSwiperList()
    this.getvideosList()
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