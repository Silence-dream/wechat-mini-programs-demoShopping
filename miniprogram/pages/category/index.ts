// 引入请求方法
import { request } from "../../request/index";
import { ResponseProps, CatesProps } from "../../store/store";
Page({
  data: {
    // 左侧菜单数据
    leftMenuList: [],
    // 右侧商品数据
    rightConent: [],
    // 让左侧菜单选中添加样式的索引
    currentIndex: 0,
    // 右侧菜单滑动距离顶部的距离
    scrollTop: 0,
  },
  /* 缓存值 商品数据 */
  Cates: [],
  onLoad() {
    /* 分类商品数据缓存 */
    const Cates = wx.getStorageSync("cates");
    // 如果本地存储里面没有数据那么就发起请求获取
    if (!Cates) {
      // console.log(!Cates);
      // console.log("本地存储里面没有数据");
      this.getCates();
    } else {
      // 如果有本地存储里面有数据那么就调用数据

      // 本地存储里面的时间
      const timeStorage: number = wx.getStorageSync("cates").time;
      // 本地存储存进去的时间和当前的时间差
      const diffTime: number = Date.now() - timeStorage;
      // 大于这个时间就重新获取一次数据
      if (diffTime > 1000 * 60 * 5) {
        // console.log("该重新获取一次数据了");
        this.getCates();
      } else {
        // 小于这个时间就直接调用本地存储里面的数据
        //#region 保存数据
        this.Cates = wx.getStorageSync("cates").data;
        const leftMenuList = this.Cates.map((item: CatesProps) => {
          return item.cat_name;
        });
        const rightConent = this.Cates.map((item: CatesProps) => {
          return item.children;
        });
        /* 类型断言 */
        const leftMenuListD = leftMenuList as never[];
        const rightConentD = rightConent as never[];
        // 保存左侧菜单数据和右侧菜单数据
        this.setData({
          leftMenuList: leftMenuListD,
          rightConent: rightConentD[0],
        });
        //#endregion
      }
    }
  },
  // 获取分页数据
  async getCates() {
    // request({
    //   url: "/categories",
    // }).then((result: ResponseProps) => {
    //   // 保存值到缓存变量里面
    //   this.Cates = result.data.message;
    //   /* 保存值到本地存储里面 */
    //   wx.setStorageSync("cates", {
    //     time: Date.now(),
    //     data: this.Cates,
    //   });
    //   const leftMenuList = this.Cates.map((item: CatesProps) => {
    //     return item.cat_name;
    //   });
    //   const rightConent = this.Cates.map((item: CatesProps) => {
    //     return item.children;
    //   });
    //   /* 类型断言 */
    //   const leftMenuListD = leftMenuList as never[];
    //   const rightConentD = rightConent as never[];
    //   // 保存左侧菜单数据和右侧菜单数据
    //   this.setData({
    //     leftMenuList: leftMenuListD,
    //     rightConent: rightConentD[0],
    //   });
    // });
    const result: any = await request({ url: "/categories" });
    // 保存值到缓存变量里面
    this.Cates = result.data.message;
    /* 保存值到本地存储里面 */
    wx.setStorageSync("cates", {
      time: Date.now(),
      data: this.Cates,
    });
    const leftMenuList = this.Cates.map((item: CatesProps) => {
      return item.cat_name;
    });
    const rightConent = this.Cates.map((item: CatesProps) => {
      return item.children;
    });
    /* 类型断言 */
    const leftMenuListD = leftMenuList as never[];
    const rightConentD = rightConent as never[];
    // 保存左侧菜单数据和右侧菜单数据
    this.setData({
      leftMenuList: leftMenuListD,
      rightConent: rightConentD[0],
    });
  },
  // 点击切换商品分类
  handCurrent(e: any) {
    const { index } = e.currentTarget.dataset;
    //#region 右侧分类切换
    const rightConent = this.Cates.map((item: CatesProps) => {
      return item.children;
    });
    /* 类型断言 */
    const rightConentD = rightConent as never[];
    // 保存左侧菜单数据和右侧菜单数据
    this.setData({
      rightConent: rightConentD[index],
      // 左侧菜单选中样式切换
      currentIndex: index,
      // 点击左侧菜单让右边菜单距离顶部的距离为0
      scrollTop: 0,
    });
    //#endregion
  },
});
