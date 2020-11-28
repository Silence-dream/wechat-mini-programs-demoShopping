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
      goodsObj: {
        goods_name: result.data.message.goods_name,
        goods_price: result.data.message.goods_price,
        // iphone部分手机 不识别 webp图片格式
        // 最好找到后台 让他进行修改
        // 临时自己改 确保后台存在 1.webp => 1.jpg
        goods_introduce: result.data.message.goods_introduce.replace(
          /\.webp/g,
          ".jpg"
        ),
        pics: result.data.message.pics,
      },
    });
  },
});
