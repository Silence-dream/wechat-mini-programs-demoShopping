import { request } from "../../request/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取商品id
    const { goods_id } = options;
    this.getGoodsDetail(goods_id);
  },
  /* 获取商品详情 */
  async getGoodsDetail<T>(goods_id: T) {
    const result = await request({ url: "/goods/detail", data: { goods_id } });
    this.setData({
      goodsObj: result.data.message,
    });
  },
});
