//导入请求方法
import { request } from "../../request/index.js";
//Page Object
Page({
  data: {
    swiperList: [],
    catesList: [],
    floorList: [],
  },
  onLoad: function () {
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
  },
  // 获取轮播图数据
  getSwiperList(): void {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
    }).then((result: ResponseProps) => {
      this.setData({
        swiperList: result.data.message,
      });
    });
  },
  // 获取导航数据
  getCatesList(): void {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
    }).then((result: ResponseProps) => {
      console.log(result);
      this.setData({
        catesList: result.data.message,
      });
    });
  },
  // 获取楼层数据
  getFloorList(): void {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
    }).then((result: ResponseProps) => {
      console.log(result);
      this.setData({
        floorList: result.data.message,
      });
    });
  },
});

/* 返回值类型约束 */
interface ResponseProps {
  data: {
    message: never[];
    meta: never[];
  };
}
