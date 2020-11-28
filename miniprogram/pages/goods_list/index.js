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
            this.totalPages = Math.ceil(result.data.message.total / this.QueryParams.pagesize);
            console.log(result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUVKLElBQUksRUFBRTtZQUNKO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0Y7UUFFRCxTQUFTLEVBQUUsRUFBRTtRQUViLFVBQVUsRUFDUiw0RkFBNEY7S0FDL0Y7SUFFRCxXQUFXLEVBQUU7UUFFWCxLQUFLLEVBQUUsRUFBRTtRQUVULEdBQUcsRUFBRSxFQUFFO1FBRVAsT0FBTyxFQUFFLENBQUM7UUFFVixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBRUQsVUFBVSxFQUFFLENBQUM7SUFJYixNQUFNLEVBQUUsVUFBVSxPQUFZO1FBRTVCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFHbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhLEVBQUU7UUFFYixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDL0MsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFSyxZQUFZOztZQUNoQixNQUFNLE1BQU0sR0FBRyxNQUFNLGVBQU8sQ0FBQztnQkFDM0IsR0FBRyxFQUFFLGVBQWU7Z0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVzthQUN2QixDQUFDLENBQUM7WUFHSCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsU0FBUzthQUNyQixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDdEQsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBRUQsYUFBYSxDQUFDLENBQU07UUFDbEIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUk7U0FDTCxDQUFDLENBQUM7SUFFTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZXF1ZXN0L2luZGV4XCI7XG5QYWdlKHtcbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIC8qIHRhYue7hOS7tueahOaVsOaNriAqL1xuICAgIHRhYnM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6IFwi57u85ZCIXCIsXG4gICAgICAgIGlzQWN0aXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwi6ZSA6YePXCIsXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcIuS7t+agvFwiLFxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gICAgLyog5ZWG5ZOB5YiX6KGo5pWw5o2uICovXG4gICAgZ29vZHNMaXN0OiBbXSxcbiAgICAvKiDlpoLmnpzllYblk4HliJfooajmlbDmja7ph4zpnaLmsqHmnInnmoTlm77niYfnmoTmm7/mjaLlm77niYcgKi9cbiAgICByZXBsYWNlSU1HOlxuICAgICAgXCJodHRwOi8vaW1hZ2UyLnN1bmluZy5jbi91aW1nL2IyYy9uZXdjYXRlbnRyaWVzLzAwNzAwNzgwNTctMDAwMDAwMDAwNjM0OTE3MDIwXzFfODAweDgwMC5qcGdcIixcbiAgfSxcbiAgLy8g5o6l5Y+j6KaB55qE5Y+C5pWwXG4gIFF1ZXJ5UGFyYW1zOiB7XG4gICAgLy8g5YWz6ZSu5a2XXG4gICAgcXVlcnk6IFwiXCIsXG4gICAgLy8g5YiG57G7aWRcbiAgICBjaWQ6IFwiXCIsXG4gICAgLy8g6aG156CBXG4gICAgcGFnZW51bTogMSxcbiAgICAvLyDpobXlrrnph49cbiAgICBwYWdlc2l6ZTogMTAsXG4gIH0sXG4gIC8vIOaAu+mhteaVsFxuICB0b3RhbFBhZ2VzOiAxLFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIC8vIOiuvue9ruWIhuexu2lkXG4gICAgdGhpcy5RdWVyeVBhcmFtcy5jaWQgPSBvcHRpb25zLmNpZDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlF1ZXJ5UGFyYW1zKTtcbiAgICAvKiDojrflj5bllYblk4HliJfooaggKi9cbiAgICB0aGlzLmdldEdvb2RzTGlzdCgpO1xuICB9LFxuICAvLyDkuIrmi4nop6blupXkuovku7ZcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuICAgIC8qIOa7keWKqOWIsOW6lemDqOWKoOi9veS4i+S4gOmhteaVsOaNriAqL1xuICAgIGlmICh0aGlzLlF1ZXJ5UGFyYW1zLnBhZ2VudW0gPj0gdGhpcy50b3RhbFBhZ2VzKSB7XG4gICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogXCLmsqHmnInkuIvkuIDpobXmlbDmja7kuoZcIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5RdWVyeVBhcmFtcy5wYWdlbnVtKys7XG4gICAgICAvLyDlj5HpgIHor7fmsYLojrflj5bmlbDmja5cbiAgICAgIHRoaXMuZ2V0R29vZHNMaXN0KCk7XG4gICAgfVxuICB9LFxuICAvKiDojrflvpfllYblk4HliJfooajmlbDmja4gKi9cbiAgYXN5bmMgZ2V0R29vZHNMaXN0KCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3Qoe1xuICAgICAgdXJsOiBcIi9nb29kcy9zZWFyY2hcIixcbiAgICAgIGRhdGE6IHRoaXMuUXVlcnlQYXJhbXMsXG4gICAgfSk7XG4gICAgLy8g5L+d5a2Y6K+35rGC5Zue5p2l55qE5ZWG5ZOB5YiX6KGo5pWw5o2uXG4gICAgLyog5ou85o6l5pWw57uEICovXG4gICAgY29uc3QgYXJyQ29uY2F0ID0gdGhpcy5kYXRhLmdvb2RzTGlzdC5jb25jYXQocmVzdWx0LmRhdGEubWVzc2FnZS5nb29kcyk7XG4gICAgLy8gWy4uLnRoaXMuZGF0YS5nb29kc0xpc3QsIC4uLnJlc3VsdC5kYXRhLm1lc3NhZ2UuZ29vZHNdXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGdvb2RzTGlzdDogYXJyQ29uY2F0LFxuICAgIH0pO1xuICAgIC8vIOiuvue9ruaAu+mhteaVsFxuICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChcbiAgICAgIHJlc3VsdC5kYXRhLm1lc3NhZ2UudG90YWwgLyB0aGlzLlF1ZXJ5UGFyYW1zLnBhZ2VzaXplXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICB9LFxuICAvLyDooqvpgInkuK3nmoQgdGFicyDliIfmjaLmoLflvI9cbiAgY2hhbmdlQ3VycmVudChlOiBhbnkpIHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSBlLmRldGFpbDtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgY29uc3QgeyB0YWJzIH0gPSB0aGlzLmRhdGE7XG4gICAgdGFicy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBpbmRleCA9PT0gaSA/IChpdGVtLmlzQWN0aXZlID0gdHJ1ZSkgOiAoaXRlbS5pc0FjdGl2ZSA9IGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdGFicyxcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIueItue7hOS7tuiiq+inpuWPkeS6hlwiKTtcbiAgfSxcbn0pO1xuIl19