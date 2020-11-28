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
        wx.showLoading({ title: "加载中" });
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
            wx.hideLoading();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUVKLElBQUksRUFBRTtZQUNKO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0Y7UUFFRCxTQUFTLEVBQUUsRUFBRTtRQUViLFVBQVUsRUFDUiw0RkFBNEY7S0FDL0Y7SUFFRCxXQUFXLEVBQUU7UUFFWCxLQUFLLEVBQUUsRUFBRTtRQUVULEdBQUcsRUFBRSxFQUFFO1FBRVAsT0FBTyxFQUFFLENBQUM7UUFFVixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBRUQsVUFBVSxFQUFFLENBQUM7SUFJYixNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBR25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYSxFQUFFO1FBRWIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQy9DLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLEVBQUU7UUFLakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUssWUFBWTs7WUFDaEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFPLENBQUM7Z0JBQzNCLEdBQUcsRUFBRSxlQUFlO2dCQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDdkIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBR3hFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWpCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBRXpCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUN0RCxDQUFDO1FBRUosQ0FBQztLQUFBO0lBRUQsYUFBYSxDQUFDLENBQU07UUFDbEIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUk7U0FDTCxDQUFDLENBQUM7SUFFTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZXF1ZXN0L2luZGV4XCI7XG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIC8qIHRhYue7hOS7tueahOaVsOaNriAqL1xuICAgIHRhYnM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6IFwi57u85ZCIXCIsXG4gICAgICAgIGlzQWN0aXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwi6ZSA6YePXCIsXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcIuS7t+agvFwiLFxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gICAgLyog5ZWG5ZOB5YiX6KGo5pWw5o2uICovXG4gICAgZ29vZHNMaXN0OiBbXSxcbiAgICAvKiDlpoLmnpzllYblk4HliJfooajmlbDmja7ph4zpnaLmsqHmnInnmoTlm77niYfnmoTmm7/mjaLlm77niYcgKi9cbiAgICByZXBsYWNlSU1HOlxuICAgICAgXCJodHRwOi8vaW1hZ2UyLnN1bmluZy5jbi91aW1nL2IyYy9uZXdjYXRlbnRyaWVzLzAwNzAwNzgwNTctMDAwMDAwMDAwNjM0OTE3MDIwXzFfODAweDgwMC5qcGdcIixcbiAgfSxcbiAgLy8g5o6l5Y+j6KaB55qE5Y+C5pWwXG4gIFF1ZXJ5UGFyYW1zOiB7XG4gICAgLy8g5YWz6ZSu5a2XXG4gICAgcXVlcnk6IFwiXCIsXG4gICAgLy8g5YiG57G7aWRcbiAgICBjaWQ6IFwiXCIsXG4gICAgLy8g6aG156CBXG4gICAgcGFnZW51bTogMSxcbiAgICAvLyDpobXlrrnph49cbiAgICBwYWdlc2l6ZTogMTAsXG4gIH0sXG4gIC8vIOaAu+mhteaVsFxuICB0b3RhbFBhZ2VzOiAxLFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIHd4LnNob3dMb2FkaW5nKHsgdGl0bGU6IFwi5Yqg6L295LitXCIgfSk7XG4gICAgLy8g6K6+572u5YiG57G7aWRcbiAgICB0aGlzLlF1ZXJ5UGFyYW1zLmNpZCA9IG9wdGlvbnMuY2lkO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuUXVlcnlQYXJhbXMpO1xuICAgIC8qIOiOt+WPluWVhuWTgeWIl+ihqCAqL1xuICAgIHRoaXMuZ2V0R29vZHNMaXN0KCk7XG4gIH0sXG4gIC8vIOS4iuaLieinpuW6leS6i+S7tlxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG4gICAgLyog5ruR5Yqo5Yiw5bqV6YOo5Yqg6L295LiL5LiA6aG15pWw5o2uICovXG4gICAgaWYgKHRoaXMuUXVlcnlQYXJhbXMucGFnZW51bSA+PSB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiBcIuayoeacieS4i+S4gOmhteaVsOaNruS6hlwiIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLlF1ZXJ5UGFyYW1zLnBhZ2VudW0rKztcbiAgICAgIC8vIOWPkemAgeivt+axguiOt+WPluaVsOaNrlxuICAgICAgdGhpcy5nZXRHb29kc0xpc3QoKTtcbiAgICB9XG4gIH0sXG4gIC8qIOS4i+aLieaTjeS9nCAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICog5LiL5ouJ5Yi35paw5Yqf6IO9XG4gICAgICog6YeN572u6aG156CBLOWVhuWTgeWIl+ihqCzph43mlrDlj5HpgIHor7fmsYJcbiAgICAgKi9cbiAgICB0aGlzLlF1ZXJ5UGFyYW1zLnBhZ2VudW0gPSAxO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBnb29kc0xpc3Q6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0R29vZHNMaXN0KCk7XG4gIH0sXG4gIC8qIOiOt+W+l+WVhuWTgeWIl+ihqOaVsOaNriAqL1xuICBhc3luYyBnZXRHb29kc0xpc3QoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdCh7XG4gICAgICB1cmw6IFwiL2dvb2RzL3NlYXJjaFwiLFxuICAgICAgZGF0YTogdGhpcy5RdWVyeVBhcmFtcyxcbiAgICB9KTtcbiAgICAvKiDmi7zmjqXmlbDnu4QgKi9cbiAgICBjb25zdCBhcnJDb25jYXQgPSB0aGlzLmRhdGEuZ29vZHNMaXN0LmNvbmNhdChyZXN1bHQuZGF0YS5tZXNzYWdlLmdvb2RzKTtcbiAgICAvLyBbLi4udGhpcy5kYXRhLmdvb2RzTGlzdCwgLi4ucmVzdWx0LmRhdGEubWVzc2FnZS5nb29kc11cbiAgICAvLyDkv53lrZjor7fmsYLlm57mnaXnmoTllYblk4HliJfooajmlbDmja5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZ29vZHNMaXN0OiBhcnJDb25jYXQsXG4gICAgfSk7XG4gICAgLy8g6K+35rGC5a6M5pWw5o2u5YWz6ZetbG9hZGluZ+WKoOi9vVxuICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgLy8g6K+35rGC5a6M5pWw5o2u5YWz6Zet5LiL5ouJ5pWI5p6cXG4gICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xuICAgIC8vIOiuvue9ruaAu+mhteaVsFxuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChcbiAgICAgIHJlc3VsdC5kYXRhLm1lc3NhZ2UudG90YWwgLyB0aGlzLlF1ZXJ5UGFyYW1zLnBhZ2VzaXplXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9LFxuICAvLyDooqvpgInkuK3nmoQgdGFicyDliIfmjaLmoLflvI9cbiAgY2hhbmdlQ3VycmVudChlOiBhbnkpIHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSBlLmRldGFpbDtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgY29uc3QgeyB0YWJzIH0gPSB0aGlzLmRhdGE7XG4gICAgdGFicy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBpbmRleCA9PT0gaSA/IChpdGVtLmlzQWN0aXZlID0gdHJ1ZSkgOiAoaXRlbS5pc0FjdGl2ZSA9IGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdGFicyxcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIueItue7hOS7tuiiq+inpuWPkeS6hlwiKTtcbiAgfSxcbn0pO1xuIl19