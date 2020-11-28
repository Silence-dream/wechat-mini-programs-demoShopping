import { request } from "../../request/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    /* tab组件的数据 */
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
    /* 商品列表数据 */
    goodsList: [],
    /* 如果商品列表数据里面没有的图片的替换图片 */
    replaceIMG:
      "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
  },
  // 接口要的参数
  QueryParams: {
    // 关键字
    query: "",
    // 分类id
    cid: "",
    // 页码
    pagenum: 1,
    // 页容量
    pagesize: 10,
  },
  // 总页数
  totalPages: 1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options: any) {
    // 设置分类id
    this.QueryParams.cid = options.cid;
    // console.log(this.QueryParams);
    /* 获取商品列表 */
    this.getGoodsList();
  },
  // 上拉触底事件
  onReachBottom: function () {
    /* 滑动到底部加载下一页数据 */
    if (this.QueryParams.pagenum >= this.totalPages) {
      wx.showToast({ title: "没有下一页数据了" });
    } else {
      this.QueryParams.pagenum++;
      // 发送请求获取数据
      this.getGoodsList();
    }
  },
  /* 获得商品列表数据 */
  async getGoodsList() {
    const result = await request({
      url: "/goods/search",
      data: this.QueryParams,
    });
    // 保存请求回来的商品列表数据
    /* 拼接数组 */
    const arrConcat = this.data.goodsList.concat(result.data.message.goods);
    // [...this.data.goodsList, ...result.data.message.goods]
    this.setData({
      goodsList: arrConcat,
    });
    // 设置总页数
    this.totalPages = Math.ceil(
      result.data.message.total / this.QueryParams.pagesize
    );
    console.log(result);
  },
  // 被选中的 tabs 切换样式
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
    // console.log("父组件被触发了");
  },
});
