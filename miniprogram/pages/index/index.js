"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../request/index.js");
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
    getSwiperList() {
        index_js_1.request({
            url: "/home/swiperdata",
        }).then((result) => {
            this.setData({
                swiperList: result.data.message,
            });
        });
    },
    getCatesList() {
        index_js_1.request({
            url: "/home/catitems",
        }).then((result) => {
            this.setData({
                catesList: result.data.message,
            });
        });
    },
    getFloorList() {
        index_js_1.request({
            url: "/home/floordata",
        }).then((result) => {
            this.setData({
                floorList: result.data.message,
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUFpRDtBQUlqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhO1FBQ1gsa0JBQU8sQ0FBQztZQUNOLEdBQUcsRUFBRSxrQkFBa0I7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQXFCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDaEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLGtCQUFPLENBQUM7WUFDTixHQUFHLEVBQUUsZ0JBQWdCO1NBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFxQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQy9CLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixrQkFBTyxDQUFDO1lBQ04sR0FBRyxFQUFFLGlCQUFpQjtTQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBcUIsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTzthQUMvQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+WvvOWFpeivt+axguaWueazlVxyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXguanNcIjtcclxuLy8g5a+85YWl57qm5p2fXHJcbmltcG9ydCB7IFJlc3BvbnNlUHJvcHMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuLy9QYWdlIE9iamVjdFxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBzd2lwZXJMaXN0OiBbXSxcclxuICAgIGNhdGVzTGlzdDogW10sXHJcbiAgICBmbG9vckxpc3Q6IFtdLFxyXG4gIH0sXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmdldFN3aXBlckxpc3QoKTtcclxuICAgIHRoaXMuZ2V0Q2F0ZXNMaXN0KCk7XHJcbiAgICB0aGlzLmdldEZsb29yTGlzdCgpO1xyXG4gIH0sXHJcbiAgLy8g6I635Y+W6L2u5pKt5Zu+5pWw5o2uXHJcbiAgZ2V0U3dpcGVyTGlzdCgpOiB2b2lkIHtcclxuICAgIHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFwiL2hvbWUvc3dpcGVyZGF0YVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0OiBSZXNwb25zZVByb3BzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc3dpcGVyTGlzdDogcmVzdWx0LmRhdGEubWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIOiOt+WPluWvvOiIquaVsOaNrlxyXG4gIGdldENhdGVzTGlzdCgpOiB2b2lkIHtcclxuICAgIHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFwiL2hvbWUvY2F0aXRlbXNcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdDogUmVzcG9uc2VQcm9wcykgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGNhdGVzTGlzdDogcmVzdWx0LmRhdGEubWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIOiOt+WPlualvOWxguaVsOaNrlxyXG4gIGdldEZsb29yTGlzdCgpOiB2b2lkIHtcclxuICAgIHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFwiL2hvbWUvZmxvb3JkYXRhXCIsXHJcbiAgICB9KS50aGVuKChyZXN1bHQ6IFJlc3BvbnNlUHJvcHMpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBmbG9vckxpc3Q6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==