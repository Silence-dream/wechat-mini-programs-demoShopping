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
    onLoad: function (options) {
        this.QueryParams.cid = options.cid;
        this.getGoodsList();
    },
    onReachBottom: function () {
        console.log(11111);
    },
    getGoodsList() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield index_1.request({
                url: "/goods/search",
                data: this.QueryParams,
            });
            this.setData({
                goodsList: result.data.message.goods,
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUVKLElBQUksRUFBRTtZQUNKO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0Y7UUFFRCxTQUFTLEVBQUUsRUFBRTtRQUViLFVBQVUsRUFDUiw0RkFBNEY7S0FDL0Y7SUFFRCxXQUFXLEVBQUU7UUFFWCxLQUFLLEVBQUUsRUFBRTtRQUVULEdBQUcsRUFBRSxFQUFFO1FBRVAsT0FBTyxFQUFFLENBQUM7UUFFVixRQUFRLEVBQUUsRUFBRTtLQUNiO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUU1QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBR25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYSxFQUFFO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUssWUFBWTs7WUFDaEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFPLENBQUM7Z0JBQzNCLEdBQUcsRUFBRSxlQUFlO2dCQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDdkIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSzthQUNyQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFRCxhQUFhLENBQUMsQ0FBTTtRQUNsQixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSTtTQUNMLENBQUMsQ0FBQztJQUVMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXhcIjtcblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgLyogdGFi57uE5Lu255qE5pWw5o2uICovXG4gICAgdGFiczogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCLnu7zlkIhcIixcbiAgICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCLplIDph49cIixcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6IFwi5Lu35qC8XCIsXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICAvKiDllYblk4HliJfooajmlbDmja4gKi9cbiAgICBnb29kc0xpc3Q6IFtdLFxuICAgIC8qIOWmguaenOWVhuWTgeWIl+ihqOaVsOaNrumHjOmdouayoeacieeahOWbvueJh+eahOabv+aNouWbvueJhyAqL1xuICAgIHJlcGxhY2VJTUc6XG4gICAgICBcImh0dHA6Ly9pbWFnZTIuc3VuaW5nLmNuL3VpbWcvYjJjL25ld2NhdGVudHJpZXMvMDA3MDA3ODA1Ny0wMDAwMDAwMDA2MzQ5MTcwMjBfMV84MDB4ODAwLmpwZ1wiLFxuICB9LFxuICAvLyDmjqXlj6PopoHnmoTlj4LmlbBcbiAgUXVlcnlQYXJhbXM6IHtcbiAgICAvLyDlhbPplK7lrZdcbiAgICBxdWVyeTogXCJcIixcbiAgICAvLyDliIbnsbtpZFxuICAgIGNpZDogXCJcIixcbiAgICAvLyDpobXnoIFcbiAgICBwYWdlbnVtOiAxLFxuICAgIC8vIOmhteWuuemHj1xuICAgIHBhZ2VzaXplOiAxMCxcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xuICAgIC8vIOiuvue9ruWIhuexu2lkXG4gICAgdGhpcy5RdWVyeVBhcmFtcy5jaWQgPSBvcHRpb25zLmNpZDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlF1ZXJ5UGFyYW1zKTtcbiAgICAvKiDojrflj5bllYblk4HliJfooaggKi9cbiAgICB0aGlzLmdldEdvb2RzTGlzdCgpO1xuICB9LFxuICAvLyDkuIrmi4nop6blupXkuovku7ZcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKDExMTExKTtcbiAgfSxcbiAgLyog6I635b6X5ZWG5ZOB5YiX6KGo5pWw5o2uICovXG4gIGFzeW5jIGdldEdvb2RzTGlzdCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHtcbiAgICAgIHVybDogXCIvZ29vZHMvc2VhcmNoXCIsXG4gICAgICBkYXRhOiB0aGlzLlF1ZXJ5UGFyYW1zLFxuICAgIH0pO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBnb29kc0xpc3Q6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuZ29vZHMsXG4gICAgfSk7XG4gIH0sXG4gIC8vIOiiq+mAieS4reeahCB0YWJzIOWIh+aNouagt+W8j1xuICBjaGFuZ2VDdXJyZW50KGU6IGFueSkge1xuICAgIGNvbnN0IHsgaW5kZXggfSA9IGUuZGV0YWlsO1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICBjb25zdCB7IHRhYnMgfSA9IHRoaXMuZGF0YTtcbiAgICB0YWJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIGluZGV4ID09PSBpID8gKGl0ZW0uaXNBY3RpdmUgPSB0cnVlKSA6IChpdGVtLmlzQWN0aXZlID0gZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB0YWJzLFxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwi54i257uE5Lu26KKr6Kem5Y+R5LqGXCIpO1xuICB9LFxufSk7XG4iXX0=