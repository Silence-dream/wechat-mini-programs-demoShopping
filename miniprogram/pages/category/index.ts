// 引入请求方法
import { request } from "../../request/index";
import { ResponseProps, CatesProps } from "../../store/store";
Page({
  data: {
    // 左侧菜单数据
    leftMenuList: [],
    // 右侧商品数据
    rightConent: [],
    currentIndex: 0,
  },
  /* 缓存值 */
  Cates: [],
  onLoad() {
    this.getCates();
  },
  // 获取分页数据
  getCates() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
    }).then((result: ResponseProps) => {
      this.Cates = result.data.message;
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
    });
    //#endregion
  },
});
