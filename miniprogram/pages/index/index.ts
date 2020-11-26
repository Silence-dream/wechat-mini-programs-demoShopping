//Page Object
Page({
  data: {
    swiperList: [],
  },
  onLoad: function () {
    console.log(1);
    wx.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
      header: { "content-type": "application/json" },
      method: "GET",
      dataType: "json",
      responseType: "text",
      success: (result: any) => {
        this.setData({
          swiperList: result.data.message,
        });
      },
    });
  },
  //options(Object)
});
