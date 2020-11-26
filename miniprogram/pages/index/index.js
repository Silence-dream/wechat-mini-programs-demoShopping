"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../request/index.js");
Page({
    data: {
        swiperList: [],
        catesList: [],
    },
    onLoad: function () {
        this.getSwiperList();
        this.getCatesList();
    },
    getSwiperList() {
        index_js_1.request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
        }).then((result) => {
            this.setData({
                swiperList: result.data.message,
            });
        });
    },
    getCatesList() {
        index_js_1.request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
        }).then((result) => {
            this.setData({
                catesList: result.data.message,
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUFpRDtBQUdqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFHRCxhQUFhO1FBQ1gsa0JBQU8sQ0FBQztZQUNOLEdBQUcsRUFBRSxpRUFBaUU7U0FDdkUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUNoQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1Ysa0JBQU8sQ0FBQztZQUNOLEdBQUcsRUFBRSwrREFBK0Q7U0FDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUMvQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+WvvOWFpeivt+axguaWueazlVxyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXguanNcIjtcclxuXHJcbi8vUGFnZSBPYmplY3RcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgc3dpcGVyTGlzdDogW10sXHJcbiAgICBjYXRlc0xpc3Q6IFtdLFxyXG4gIH0sXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmdldFN3aXBlckxpc3QoKTtcclxuICAgIHRoaXMuZ2V0Q2F0ZXNMaXN0KCk7XHJcbiAgfSxcclxuXHJcbiAgLy8g6I635Y+W6L2u5pKt5Zu+5pWw5o2uXHJcbiAgZ2V0U3dpcGVyTGlzdCgpOiB2b2lkIHtcclxuICAgIHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hcGktaG11Z28td2ViLml0aGVpbWEubmV0L2FwaS9wdWJsaWMvdjEvaG9tZS9zd2lwZXJkYXRhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHN3aXBlckxpc3Q6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvLyDojrflj5blr7zoiKrmlbDmja5cclxuICBnZXRDYXRlc0xpc3QoKTogdm9pZCB7XHJcbiAgICByZXF1ZXN0KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLWhtdWdvLXdlYi5pdGhlaW1hLm5ldC9hcGkvcHVibGljL3YxL2hvbWUvY2F0aXRlbXNcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2F0ZXNMaXN0OiByZXN1bHQuZGF0YS5tZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=