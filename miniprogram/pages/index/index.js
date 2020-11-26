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
            console.log(result);
            this.setData({
                catesList: result.data.message,
            });
        });
    },
    getFloorList() {
        index_js_1.request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
        }).then((result) => {
            console.log(result);
            this.setData({
                floorList: result.data.message,
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFEQUFpRDtBQUVqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhO1FBQ1gsa0JBQU8sQ0FBQztZQUNOLEdBQUcsRUFBRSxpRUFBaUU7U0FDdkUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQXFCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDaEMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLGtCQUFPLENBQUM7WUFDTixHQUFHLEVBQUUsK0RBQStEO1NBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFxQixFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDL0IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLGtCQUFPLENBQUM7WUFDTixHQUFHLEVBQUUsZ0VBQWdFO1NBQ3RFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFxQixFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDL0IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy/lr7zlhaXor7fmsYLmlrnms5VcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZXF1ZXN0L2luZGV4LmpzXCI7XHJcbi8vUGFnZSBPYmplY3RcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgc3dpcGVyTGlzdDogW10sXHJcbiAgICBjYXRlc0xpc3Q6IFtdLFxyXG4gICAgZmxvb3JMaXN0OiBbXSxcclxuICB9LFxyXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5nZXRTd2lwZXJMaXN0KCk7XHJcbiAgICB0aGlzLmdldENhdGVzTGlzdCgpO1xyXG4gICAgdGhpcy5nZXRGbG9vckxpc3QoKTtcclxuICB9LFxyXG4gIC8vIOiOt+WPlui9ruaSreWbvuaVsOaNrlxyXG4gIGdldFN3aXBlckxpc3QoKTogdm9pZCB7XHJcbiAgICByZXF1ZXN0KHtcclxuICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLWhtdWdvLXdlYi5pdGhlaW1hLm5ldC9hcGkvcHVibGljL3YxL2hvbWUvc3dpcGVyZGF0YVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0OiBSZXNwb25zZVByb3BzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc3dpcGVyTGlzdDogcmVzdWx0LmRhdGEubWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIOiOt+WPluWvvOiIquaVsOaNrlxyXG4gIGdldENhdGVzTGlzdCgpOiB2b2lkIHtcclxuICAgIHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hcGktaG11Z28td2ViLml0aGVpbWEubmV0L2FwaS9wdWJsaWMvdjEvaG9tZS9jYXRpdGVtc1wiLFxyXG4gICAgfSkudGhlbigocmVzdWx0OiBSZXNwb25zZVByb3BzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2F0ZXNMaXN0OiByZXN1bHQuZGF0YS5tZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy8g6I635Y+W5qW85bGC5pWw5o2uXHJcbiAgZ2V0Rmxvb3JMaXN0KCk6IHZvaWQge1xyXG4gICAgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogXCJodHRwczovL2FwaS1obXVnby13ZWIuaXRoZWltYS5uZXQvYXBpL3B1YmxpYy92MS9ob21lL2Zsb29yZGF0YVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0OiBSZXNwb25zZVByb3BzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZmxvb3JMaXN0OiByZXN1bHQuZGF0YS5tZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyog6L+U5Zue5YC857G75Z6L57qm5p2fICovXHJcbmludGVyZmFjZSBSZXNwb25zZVByb3BzIHtcclxuICBkYXRhOiB7XHJcbiAgICBtZXNzYWdlOiBuZXZlcltdO1xyXG4gICAgbWV0YTogbmV2ZXJbXTtcclxuICB9O1xyXG59XHJcbiJdfQ==