// pages/cart/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  // 获取用户收获地址
  handleChooseAddress() {
    // wx.chooseAddress({
    //   success: (result) => {
    //     console.log(result);
    //   },
    // });
    //   https://developers.weixin.qq.com/community/develop/doc/000c0a0a590490590d0ba0c3d51801
    wx.getSetting({
      success: (result) => {
        console.log(result);
      },
    });
  },
});
