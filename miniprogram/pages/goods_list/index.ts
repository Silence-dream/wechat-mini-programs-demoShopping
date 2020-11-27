// pages/goods_list/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "综合",
        isActive: true,
      },
      {
        id: 1,
        name: "销量",
        isActive: false,
      },
      {
        id: 2,
        name: "价格",
        isActive: false,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },
  changeCurrent(e: any) {
    const { index } = e.detail;
    console.log(index);
    const { tabs } = this.data;
    tabs.forEach((item, i) => {
      index === i ? (item.isActive = true) : (item.isActive = false);
    });
    this.setData({
      tabs,
    });
    console.log("父组件被触发了");
  },
});
