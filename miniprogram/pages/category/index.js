"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../request/index");
Page({
    data: {
        leftMenuList: [],
        rightConent: [],
        currentIndex: 0,
    },
    Cates: [],
    onLoad() {
        const Cates = wx.getStorageSync("cates");
        if (!Cates) {
            this.getCates();
        }
        else {
            const timeStorage = wx.getStorageSync("cates").time;
            const diffTime = Date.now() - timeStorage;
            if (diffTime > 1000 * 60 * 5) {
                this.getCates();
            }
            else {
                this.Cates = wx.getStorageSync("cates").data;
                const leftMenuList = this.Cates.map((item) => {
                    return item.cat_name;
                });
                const rightConent = this.Cates.map((item) => {
                    return item.children;
                });
                const leftMenuListD = leftMenuList;
                const rightConentD = rightConent;
                this.setData({
                    leftMenuList: leftMenuListD,
                    rightConent: rightConentD[0],
                });
            }
        }
    },
    getCates() {
        index_1.request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/categories",
        }).then((result) => {
            this.Cates = result.data.message;
            wx.setStorageSync("cates", {
                time: Date.now(),
                data: this.Cates,
            });
            const leftMenuList = this.Cates.map((item) => {
                return item.cat_name;
            });
            const rightConent = this.Cates.map((item) => {
                return item.children;
            });
            const leftMenuListD = leftMenuList;
            const rightConentD = rightConent;
            this.setData({
                leftMenuList: leftMenuListD,
                rightConent: rightConentD[0],
            });
        });
    },
    handCurrent(e) {
        const { index } = e.currentTarget.dataset;
        const rightConent = this.Cates.map((item) => {
            return item.children;
        });
        const rightConentD = rightConent;
        this.setData({
            rightConent: rightConentD[index],
            currentIndex: index,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUE4QztBQUU5QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFFSixZQUFZLEVBQUUsRUFBRTtRQUVoQixXQUFXLEVBQUUsRUFBRTtRQUNmLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBRUQsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNO1FBRUosTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBR1YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO2FBQU07WUFJTCxNQUFNLFdBQVcsR0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUU1RCxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsV0FBVyxDQUFDO1lBRWxELElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUU1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBR0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDN0MsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7b0JBQ3ZELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7b0JBQ3RELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsTUFBTSxhQUFhLEdBQUcsWUFBdUIsQ0FBQztnQkFDOUMsTUFBTSxZQUFZLEdBQUcsV0FBc0IsQ0FBQztnQkFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxZQUFZLEVBQUUsYUFBYTtvQkFDM0IsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzdCLENBQUMsQ0FBQzthQUVKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLGVBQU8sQ0FBQztZQUNOLEdBQUcsRUFBRSw0REFBNEQ7U0FDbEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQXFCLEVBQUUsRUFBRTtZQUVoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRWpDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2pCLENBQUMsQ0FBQztZQUNILE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO2dCQUN2RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxhQUFhLEdBQUcsWUFBdUIsQ0FBQztZQUM5QyxNQUFNLFlBQVksR0FBRyxXQUFzQixDQUFDO1lBRTVDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLGFBQWE7Z0JBQzNCLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFNO1FBQ2hCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUUxQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLFlBQVksR0FBRyxXQUFzQixDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxXQUFXLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUVoQyxZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUM7SUFFTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5byV5YWl6K+35rGC5pa55rOVXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXhcIjtcbmltcG9ydCB7IFJlc3BvbnNlUHJvcHMsIENhdGVzUHJvcHMgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgLy8g5bem5L6n6I+c5Y2V5pWw5o2uXG4gICAgbGVmdE1lbnVMaXN0OiBbXSxcbiAgICAvLyDlj7PkvqfllYblk4HmlbDmja5cbiAgICByaWdodENvbmVudDogW10sXG4gICAgY3VycmVudEluZGV4OiAwLFxuICB9LFxuICAvKiDnvJPlrZjlgLwg5ZWG5ZOB5pWw5o2uICovXG4gIENhdGVzOiBbXSxcbiAgb25Mb2FkKCkge1xuICAgIC8qIOWIhuexu+WVhuWTgeaVsOaNrue8k+WtmCAqL1xuICAgIGNvbnN0IENhdGVzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJjYXRlc1wiKTtcbiAgICAvLyDlpoLmnpzmnKzlnLDlrZjlgqjph4zpnaLmsqHmnInmlbDmja7pgqPkuYjlsLHlj5Hotbfor7fmsYLojrflj5ZcbiAgICBpZiAoIUNhdGVzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyghQ2F0ZXMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCLmnKzlnLDlrZjlgqjph4zpnaLmsqHmnInmlbDmja5cIik7XG4gICAgICB0aGlzLmdldENhdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWmguaenOacieacrOWcsOWtmOWCqOmHjOmdouacieaVsOaNrumCo+S5iOWwseiwg+eUqOaVsOaNrlxuXG4gICAgICAvLyDmnKzlnLDlrZjlgqjph4zpnaLnmoTml7bpl7RcbiAgICAgIGNvbnN0IHRpbWVTdG9yYWdlOiBudW1iZXIgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhdGVzXCIpLnRpbWU7XG4gICAgICAvLyDmnKzlnLDlrZjlgqjlrZjov5vljrvnmoTml7bpl7TlkozlvZPliY3nmoTml7bpl7Tlt65cbiAgICAgIGNvbnN0IGRpZmZUaW1lOiBudW1iZXIgPSBEYXRlLm5vdygpIC0gdGltZVN0b3JhZ2U7XG4gICAgICAvLyDlpKfkuo7ov5nkuKrml7bpl7TlsLHph43mlrDojrflj5bkuIDmrKHmlbDmja5cbiAgICAgIGlmIChkaWZmVGltZSA+IDEwMDAgKiA2MCAqIDUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLor6Xph43mlrDojrflj5bkuIDmrKHmlbDmja7kuoZcIik7XG4gICAgICAgIHRoaXMuZ2V0Q2F0ZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWwj+S6jui/meS4quaXtumXtOWwseebtOaOpeiwg+eUqOacrOWcsOWtmOWCqOmHjOmdoueahOaVsOaNrlxuICAgICAgICAvLyNyZWdpb24g5L+d5a2Y5pWw5o2uXG4gICAgICAgIHRoaXMuQ2F0ZXMgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhdGVzXCIpLmRhdGE7XG4gICAgICAgIGNvbnN0IGxlZnRNZW51TGlzdCA9IHRoaXMuQ2F0ZXMubWFwKChpdGVtOiBDYXRlc1Byb3BzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2F0X25hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByaWdodENvbmVudCA9IHRoaXMuQ2F0ZXMubWFwKChpdGVtOiBDYXRlc1Byb3BzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2hpbGRyZW47XG4gICAgICAgIH0pO1xuICAgICAgICAvKiDnsbvlnovmlq3oqIAgKi9cbiAgICAgICAgY29uc3QgbGVmdE1lbnVMaXN0RCA9IGxlZnRNZW51TGlzdCBhcyBuZXZlcltdO1xuICAgICAgICBjb25zdCByaWdodENvbmVudEQgPSByaWdodENvbmVudCBhcyBuZXZlcltdO1xuICAgICAgICAvLyDkv53lrZjlt6bkvqfoj5zljZXmlbDmja7lkozlj7Pkvqfoj5zljZXmlbDmja5cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBsZWZ0TWVudUxpc3Q6IGxlZnRNZW51TGlzdEQsXG4gICAgICAgICAgcmlnaHRDb25lbnQ6IHJpZ2h0Q29uZW50RFswXSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8g6I635Y+W5YiG6aG15pWw5o2uXG4gIGdldENhdGVzKCkge1xuICAgIHJlcXVlc3Qoe1xuICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLWhtdWdvLXdlYi5pdGhlaW1hLm5ldC9hcGkvcHVibGljL3YxL2NhdGVnb3JpZXNcIixcbiAgICB9KS50aGVuKChyZXN1bHQ6IFJlc3BvbnNlUHJvcHMpID0+IHtcbiAgICAgIC8vIOS/neWtmOWAvOWIsOe8k+WtmOWPmOmHj+mHjOmdolxuICAgICAgdGhpcy5DYXRlcyA9IHJlc3VsdC5kYXRhLm1lc3NhZ2U7XG4gICAgICAvKiDkv53lrZjlgLzliLDmnKzlnLDlrZjlgqjph4zpnaIgKi9cbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiY2F0ZXNcIiwge1xuICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgICBkYXRhOiB0aGlzLkNhdGVzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBsZWZ0TWVudUxpc3QgPSB0aGlzLkNhdGVzLm1hcCgoaXRlbTogQ2F0ZXNQcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5jYXRfbmFtZTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmlnaHRDb25lbnQgPSB0aGlzLkNhdGVzLm1hcCgoaXRlbTogQ2F0ZXNQcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5jaGlsZHJlbjtcbiAgICAgIH0pO1xuICAgICAgLyog57G75Z6L5pat6KiAICovXG4gICAgICBjb25zdCBsZWZ0TWVudUxpc3REID0gbGVmdE1lbnVMaXN0IGFzIG5ldmVyW107XG4gICAgICBjb25zdCByaWdodENvbmVudEQgPSByaWdodENvbmVudCBhcyBuZXZlcltdO1xuICAgICAgLy8g5L+d5a2Y5bem5L6n6I+c5Y2V5pWw5o2u5ZKM5Y+z5L6n6I+c5Y2V5pWw5o2uXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsZWZ0TWVudUxpc3Q6IGxlZnRNZW51TGlzdEQsXG4gICAgICAgIHJpZ2h0Q29uZW50OiByaWdodENvbmVudERbMF0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgLy8g54K55Ye75YiH5o2i5ZWG5ZOB5YiG57G7XG4gIGhhbmRDdXJyZW50KGU6IGFueSkge1xuICAgIGNvbnN0IHsgaW5kZXggfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgIC8vI3JlZ2lvbiDlj7PkvqfliIbnsbvliIfmjaJcbiAgICBjb25zdCByaWdodENvbmVudCA9IHRoaXMuQ2F0ZXMubWFwKChpdGVtOiBDYXRlc1Byb3BzKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5jaGlsZHJlbjtcbiAgICB9KTtcbiAgICAvKiDnsbvlnovmlq3oqIAgKi9cbiAgICBjb25zdCByaWdodENvbmVudEQgPSByaWdodENvbmVudCBhcyBuZXZlcltdO1xuICAgIC8vIOS/neWtmOW3puS+p+iPnOWNleaVsOaNruWSjOWPs+S+p+iPnOWNleaVsOaNrlxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICByaWdodENvbmVudDogcmlnaHRDb25lbnREW2luZGV4XSxcbiAgICAgIC8vIOW3puS+p+iPnOWNlemAieS4reagt+W8j+WIh+aNolxuICAgICAgY3VycmVudEluZGV4OiBpbmRleCxcbiAgICB9KTtcbiAgICAvLyNlbmRyZWdpb25cbiAgfSxcbn0pO1xuIl19