import { request } from "../../request/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {},
  },
  // 点击放大图片所用的数据
  PrevewImageArr: [],
  // 商品的信息
  goodsInfo: {},
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
    this.PrevewImageArr = result.data.message.pics;
    this.goodsInfo = result.data.message;
    console.log(result);
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
  // 点击图片放大
  handlePrevewImage(e: any) {
    // pics_mid
    console.log(e);
    const urls = this.PrevewImageArr.map((item: any) => item.pics_mid);
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls,
    });
  },
  // 购物车  利用本地存储来添加
  // 点击 加入购物车
  handleCartAdd() {
    // 1 获取缓存中的购物车 数组
    const cart = wx.getStorageSync("cart") || [];
    // 2 判断 商品对象是否存在于购物车数组中
    const index = cart.findIndex(
      (v: any) => v.goods_id === this.goodsInfo.goods_id
    );
    if (index === -1) {
      //3  不存在 第一次添加
      this.goodsInfo.num = 1;
      this.goodsInfo.checked = true;
      cart.push(this.goodsInfo);
    } else {
      // 4 已经存在购物车数据 执行 num++
      cart[index].num++;
    }
    // 5 把购物车重新添加回缓存中
    wx.setStorageSync("cart", cart);
    // 6 弹窗提示
    wx.showToast({
      title: "加入成功",
      icon: "success",
      // true 防止用户 手抖 疯狂点击按钮
      mask: true,
    });
  },
});
