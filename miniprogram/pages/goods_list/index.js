"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../request/index");
Page({
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
        goodsList: [],
        replaceIMG: "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_800x800.jpg",
    },
    QueryParams: {
        query: "",
        cid: "",
        pagenum: 1,
        pagesize: 10,
    },
    totalPages: 1,
    onLoad: function (options) {
        this.QueryParams.cid = options.cid;
        this.getGoodsList();
    },
    onReachBottom: function () {
        if (this.QueryParams.pagenum >= this.totalPages) {
            wx.showToast({ title: "没有下一页数据了" });
        }
        else {
            this.QueryParams.pagenum++;
            this.getGoodsList();
        }
    },
    onPullDownRefresh: function () {
        this.QueryParams.pagenum = 1;
        this.setData({
            goodsList: [],
        });
        this.getGoodsList();
    },
    getGoodsList() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield index_1.request({
                url: "/goods/search",
                data: this.QueryParams,
            });
            const arrConcat = this.data.goodsList.concat(result.data.message.goods);
            this.setData({
                goodsList: arrConcat,
            });
            wx.stopPullDownRefresh();
            this.totalPages = Math.ceil(result.data.message.total / this.QueryParams.pagesize);
        });
    },
    changeCurrent(e) {
        const { index } = e.detail;
        console.log(index);
        const { tabs } = this.data;
        tabs.forEach((item, i) => {
            index === i ? (item.isActive = true) : (item.isActive = false);
        });
        this.setData({
            tabs,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUVKLElBQUksRUFBRTtZQUNKO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0Y7UUFFRCxTQUFTLEVBQUUsRUFBRTtRQUViLFVBQVUsRUFDUiw0RkFBNEY7S0FDL0Y7SUFFRCxXQUFXLEVBQUU7UUFFWCxLQUFLLEVBQUUsRUFBRTtRQUVULEdBQUcsRUFBRSxFQUFFO1FBRVAsT0FBTyxFQUFFLENBQUM7UUFFVixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBRUQsVUFBVSxFQUFFLENBQUM7SUFJYixNQUFNLEVBQUUsVUFBVSxPQUFZO1FBRTVCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFHbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhLEVBQUU7UUFFYixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDL0MsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRCxpQkFBaUIsRUFBRTtRQUtqQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFSyxZQUFZOztZQUNoQixNQUFNLE1BQU0sR0FBRyxNQUFNLGVBQU8sQ0FBQztnQkFDM0IsR0FBRyxFQUFFLGVBQWU7Z0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVzthQUN2QixDQUFDLENBQUM7WUFFSCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFHeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsU0FBUzthQUNyQixDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUV6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDdEQsQ0FBQztRQUVKLENBQUM7S0FBQTtJQUVELGFBQWEsQ0FBQyxDQUFNO1FBQ2xCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QixLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJO1NBQ0wsQ0FBQyxDQUFDO0lBRUwsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVxdWVzdC9pbmRleFwiO1xuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICAvKiB0YWLnu4Tku7bnmoTmlbDmja4gKi9cbiAgICB0YWJzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiBcIue7vOWQiFwiLFxuICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIumUgOmHj1wiLFxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCLku7fmoLxcIixcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8qIOWVhuWTgeWIl+ihqOaVsOaNriAqL1xuICAgIGdvb2RzTGlzdDogW10sXG4gICAgLyog5aaC5p6c5ZWG5ZOB5YiX6KGo5pWw5o2u6YeM6Z2i5rKh5pyJ55qE5Zu+54mH55qE5pu/5o2i5Zu+54mHICovXG4gICAgcmVwbGFjZUlNRzpcbiAgICAgIFwiaHR0cDovL2ltYWdlMi5zdW5pbmcuY24vdWltZy9iMmMvbmV3Y2F0ZW50cmllcy8wMDcwMDc4MDU3LTAwMDAwMDAwMDYzNDkxNzAyMF8xXzgwMHg4MDAuanBnXCIsXG4gIH0sXG4gIC8vIOaOpeWPo+imgeeahOWPguaVsFxuICBRdWVyeVBhcmFtczoge1xuICAgIC8vIOWFs+mUruWtl1xuICAgIHF1ZXJ5OiBcIlwiLFxuICAgIC8vIOWIhuexu2lkXG4gICAgY2lkOiBcIlwiLFxuICAgIC8vIOmhteeggVxuICAgIHBhZ2VudW06IDEsXG4gICAgLy8g6aG15a656YePXG4gICAgcGFnZXNpemU6IDEwLFxuICB9LFxuICAvLyDmgLvpobXmlbBcbiAgdG90YWxQYWdlczogMSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICAvLyDorr7nva7liIbnsbtpZFxuICAgIHRoaXMuUXVlcnlQYXJhbXMuY2lkID0gb3B0aW9ucy5jaWQ7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5RdWVyeVBhcmFtcyk7XG4gICAgLyog6I635Y+W5ZWG5ZOB5YiX6KGoICovXG4gICAgdGhpcy5nZXRHb29kc0xpc3QoKTtcbiAgfSxcbiAgLy8g5LiK5ouJ6Kem5bqV5LqL5Lu2XG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcbiAgICAvKiDmu5HliqjliLDlupXpg6jliqDovb3kuIvkuIDpobXmlbDmja4gKi9cbiAgICBpZiAodGhpcy5RdWVyeVBhcmFtcy5wYWdlbnVtID49IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6IFwi5rKh5pyJ5LiL5LiA6aG15pWw5o2u5LqGXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuUXVlcnlQYXJhbXMucGFnZW51bSsrO1xuICAgICAgLy8g5Y+R6YCB6K+35rGC6I635Y+W5pWw5o2uXG4gICAgICB0aGlzLmdldEdvb2RzTGlzdCgpO1xuICAgIH1cbiAgfSxcbiAgLyog5LiL5ouJ5pON5L2cICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgKiDkuIvmi4nliLfmlrDlip/og71cbiAgICAgKiDph43nva7pobXnoIEs5ZWG5ZOB5YiX6KGoLOmHjeaWsOWPkemAgeivt+axglxuICAgICAqL1xuICAgIHRoaXMuUXVlcnlQYXJhbXMucGFnZW51bSA9IDE7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGdvb2RzTGlzdDogW10sXG4gICAgfSk7XG4gICAgdGhpcy5nZXRHb29kc0xpc3QoKTtcbiAgfSxcbiAgLyog6I635b6X5ZWG5ZOB5YiX6KGo5pWw5o2uICovXG4gIGFzeW5jIGdldEdvb2RzTGlzdCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHtcbiAgICAgIHVybDogXCIvZ29vZHMvc2VhcmNoXCIsXG4gICAgICBkYXRhOiB0aGlzLlF1ZXJ5UGFyYW1zLFxuICAgIH0pO1xuICAgIC8qIOaLvOaOpeaVsOe7hCAqL1xuICAgIGNvbnN0IGFyckNvbmNhdCA9IHRoaXMuZGF0YS5nb29kc0xpc3QuY29uY2F0KHJlc3VsdC5kYXRhLm1lc3NhZ2UuZ29vZHMpO1xuICAgIC8vIFsuLi50aGlzLmRhdGEuZ29vZHNMaXN0LCAuLi5yZXN1bHQuZGF0YS5tZXNzYWdlLmdvb2RzXVxuICAgIC8vIOS/neWtmOivt+axguWbnuadpeeahOWVhuWTgeWIl+ihqOaVsOaNrlxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBnb29kc0xpc3Q6IGFyckNvbmNhdCxcbiAgICB9KTtcbiAgICAvLyDor7fmsYLlrozmlbDmja7lhbPpl63kuIvmi4nmlYjmnpxcbiAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XG4gICAgLy8g6K6+572u5oC76aG15pWwXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKFxuICAgICAgcmVzdWx0LmRhdGEubWVzc2FnZS50b3RhbCAvIHRoaXMuUXVlcnlQYXJhbXMucGFnZXNpemVcbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH0sXG4gIC8vIOiiq+mAieS4reeahCB0YWJzIOWIh+aNouagt+W8j1xuICBjaGFuZ2VDdXJyZW50KGU6IGFueSkge1xuICAgIGNvbnN0IHsgaW5kZXggfSA9IGUuZGV0YWlsO1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICBjb25zdCB7IHRhYnMgfSA9IHRoaXMuZGF0YTtcbiAgICB0YWJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGluZGV4ID09PSBpID8gKGl0ZW0uaXNBY3RpdmUgPSB0cnVlKSA6IChpdGVtLmlzQWN0aXZlID0gZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB0YWJzLFxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwi54i257uE5Lu26KKr6Kem5Y+R5LqGXCIpO1xuICB9LFxufSk7XG4iXX0=