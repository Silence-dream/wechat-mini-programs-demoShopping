// 引入请求方法
import { request } from "../../request/index";
import { ResponseProps, CatesProps } from "../../store/store";
Page({
  data: {
    // 左侧菜单数据
    leftMenuList: [],
    // 右侧商品数据
    rightConent: [],
  },
  Cates: [],
  onLoad() {
    this.getCates();
  },

  // 获取分页数据
  getCates() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
    }).then((result: ResponseProps) => {
      console.log(result.data);
      this.Cates = result.data.message;
      const leftMenuList = this.Cates.map((item: CatesProps) => {
        return item.cat_name;
      });
      const rightConent = this.Cates.map((item: CatesProps) => {
        return item.children;
      });
      console.log(rightConent);
      /* 类型断言 */
      const leftMenuListD = leftMenuList as never[];
      const rightConentD = leftMenuList as never[];
      // 保存左侧菜单数据和右侧菜单数据
      this.setData({
        leftMenuList: leftMenuListD,
        rightConent: rightConentD,
      });
    });
  },
});
