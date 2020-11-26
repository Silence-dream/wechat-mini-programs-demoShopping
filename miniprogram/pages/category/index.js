"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../request/index");
Page({
    data: {
        leftMenuList: [],
        rightConent: [],
    },
    Cates: [],
    onLoad() {
        this.getCates();
    },
    getCates() {
        index_1.request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
        }).then((result) => {
            console.log(result.data);
            this.Cates = result.data.message;
            const leftMenuList = this.Cates.map((item) => {
                return item.cat_name;
            });
            const rightConent = this.Cates.map((item) => {
                return item.children;
            });
            console.log(rightConent);
            const leftMenuListD = leftMenuList;
            const rightConentD = leftMenuList;
            this.setData({
                leftMenuList: leftMenuListD,
                rightConent: rightConentD,
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUE4QztBQUU5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFFSixZQUFZLEVBQUUsRUFBRTtRQUVoQixXQUFXLEVBQUUsRUFBRTtLQUNoQjtJQUNELEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBR0QsUUFBUTtRQUNOLGVBQU8sQ0FBQztZQUNOLEdBQUcsRUFBRSw0REFBNEQ7U0FDbEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQXFCLEVBQUUsRUFBRTtZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO2dCQUN2RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV6QixNQUFNLGFBQWEsR0FBRyxZQUF1QixDQUFDO1lBQzlDLE1BQU0sWUFBWSxHQUFHLFlBQXVCLENBQUM7WUFFN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxZQUFZLEVBQUUsYUFBYTtnQkFDM0IsV0FBVyxFQUFFLFlBQVk7YUFDMUIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5byV5YWl6K+35rGC5pa55rOVXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXhcIjtcbmltcG9ydCB7IFJlc3BvbnNlUHJvcHMsIENhdGVzUHJvcHMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgLy8g5bem5L6n6I+c5Y2V5pWw5o2uXG4gICAgbGVmdE1lbnVMaXN0OiBbXSxcbiAgICAvLyDlj7PkvqfllYblk4HmlbDmja5cbiAgICByaWdodENvbmVudDogW10sXG4gIH0sXG4gIENhdGVzOiBbXSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuZ2V0Q2F0ZXMoKTtcbiAgfSxcblxuICAvLyDojrflj5bliIbpobXmlbDmja5cbiAgZ2V0Q2F0ZXMoKSB7XG4gICAgcmVxdWVzdCh7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hcGktaG11Z28td2ViLml0aGVpbWEubmV0L2FwaS9wdWJsaWMvdjEvY2F0ZWdvcmllc1wiLFxuICAgIH0pLnRoZW4oKHJlc3VsdDogUmVzcG9uc2VQcm9wcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgdGhpcy5DYXRlcyA9IHJlc3VsdC5kYXRhLm1lc3NhZ2U7XG4gICAgICBjb25zdCBsZWZ0TWVudUxpc3QgPSB0aGlzLkNhdGVzLm1hcCgoaXRlbTogQ2F0ZXNQcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5jYXRfbmFtZTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmlnaHRDb25lbnQgPSB0aGlzLkNhdGVzLm1hcCgoaXRlbTogQ2F0ZXNQcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5jaGlsZHJlbjtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmlnaHRDb25lbnQpO1xuICAgICAgLyog57G75Z6L5pat6KiAICovXG4gICAgICBjb25zdCBsZWZ0TWVudUxpc3REID0gbGVmdE1lbnVMaXN0IGFzIG5ldmVyW107XG4gICAgICBjb25zdCByaWdodENvbmVudEQgPSBsZWZ0TWVudUxpc3QgYXMgbmV2ZXJbXTtcbiAgICAgIC8vIOS/neWtmOW3puS+p+iPnOWNleaVsOaNruWSjOWPs+S+p+iPnOWNleaVsOaNrlxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGVmdE1lbnVMaXN0OiBsZWZ0TWVudUxpc3RELFxuICAgICAgICByaWdodENvbmVudDogcmlnaHRDb25lbnRELFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==