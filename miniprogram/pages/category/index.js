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
        leftMenuList: [],
        rightConent: [],
        currentIndex: 0,
        scrollTop: 0,
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
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield index_1.request({ url: "/categories" });
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
            scrollTop: 0,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsK0NBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUVKLFlBQVksRUFBRSxFQUFFO1FBRWhCLFdBQVcsRUFBRSxFQUFFO1FBRWYsWUFBWSxFQUFFLENBQUM7UUFFZixTQUFTLEVBQUUsQ0FBQztLQUNiO0lBRUQsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNO1FBRUosTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBR1YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO2FBQU07WUFJTCxNQUFNLFdBQVcsR0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUU1RCxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsV0FBVyxDQUFDO1lBRWxELElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUU1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7aUJBQU07Z0JBR0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDN0MsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7b0JBQ3ZELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7b0JBQ3RELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsTUFBTSxhQUFhLEdBQUcsWUFBdUIsQ0FBQztnQkFDOUMsTUFBTSxZQUFZLEdBQUcsV0FBc0IsQ0FBQztnQkFFNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxZQUFZLEVBQUUsYUFBYTtvQkFDM0IsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzdCLENBQUMsQ0FBQzthQUVKO1NBQ0Y7SUFDSCxDQUFDO0lBRUssUUFBUTs7WUEwQlosTUFBTSxNQUFNLEdBQVEsTUFBTSxlQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUUxRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBRWpDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2pCLENBQUMsQ0FBQztZQUNILE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO2dCQUN2RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxhQUFhLEdBQUcsWUFBdUIsQ0FBQztZQUM5QyxNQUFNLFlBQVksR0FBRyxXQUFzQixDQUFDO1lBRTVDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLGFBQWE7Z0JBQzNCLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVELFdBQVcsQ0FBQyxDQUFNO1FBQ2hCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUUxQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLFlBQVksR0FBRyxXQUFzQixDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxXQUFXLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUVoQyxZQUFZLEVBQUUsS0FBSztZQUVuQixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUVMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlvJXlhaXor7fmsYLmlrnms5VcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVxdWVzdC9pbmRleFwiO1xuaW1wb3J0IHsgQ2F0ZXNQcm9wcyB9IGZyb20gXCIuLi8uLi9zdG9yZS9zdG9yZVwiO1xuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICAvLyDlt6bkvqfoj5zljZXmlbDmja5cbiAgICBsZWZ0TWVudUxpc3Q6IFtdLFxuICAgIC8vIOWPs+S+p+WVhuWTgeaVsOaNrlxuICAgIHJpZ2h0Q29uZW50OiBbXSxcbiAgICAvLyDorqnlt6bkvqfoj5zljZXpgInkuK3mt7vliqDmoLflvI/nmoTntKLlvJVcbiAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgLy8g5Y+z5L6n6I+c5Y2V5ruR5Yqo6Led56a76aG26YOo55qE6Led56a7XG4gICAgc2Nyb2xsVG9wOiAwLFxuICB9LFxuICAvKiDnvJPlrZjlgLwg5ZWG5ZOB5pWw5o2uICovXG4gIENhdGVzOiBbXSxcbiAgb25Mb2FkKCkge1xuICAgIC8qIOWIhuexu+WVhuWTgeaVsOaNrue8k+WtmCAqL1xuICAgIGNvbnN0IENhdGVzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJjYXRlc1wiKTtcbiAgICAvLyDlpoLmnpzmnKzlnLDlrZjlgqjph4zpnaLmsqHmnInmlbDmja7pgqPkuYjlsLHlj5Hotbfor7fmsYLojrflj5ZcbiAgICBpZiAoIUNhdGVzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyghQ2F0ZXMpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCLmnKzlnLDlrZjlgqjph4zpnaLmsqHmnInmlbDmja5cIik7XG4gICAgICB0aGlzLmdldENhdGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWmguaenOacieacrOWcsOWtmOWCqOmHjOmdouacieaVsOaNrumCo+S5iOWwseiwg+eUqOaVsOaNrlxuXG4gICAgICAvLyDmnKzlnLDlrZjlgqjph4zpnaLnmoTml7bpl7RcbiAgICAgIGNvbnN0IHRpbWVTdG9yYWdlOiBudW1iZXIgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhdGVzXCIpLnRpbWU7XG4gICAgICAvLyDmnKzlnLDlrZjlgqjlrZjov5vljrvnmoTml7bpl7TlkozlvZPliY3nmoTml7bpl7Tlt65cbiAgICAgIGNvbnN0IGRpZmZUaW1lOiBudW1iZXIgPSBEYXRlLm5vdygpIC0gdGltZVN0b3JhZ2U7XG4gICAgICAvLyDlpKfkuo7ov5nkuKrml7bpl7TlsLHph43mlrDojrflj5bkuIDmrKHmlbDmja5cbiAgICAgIGlmIChkaWZmVGltZSA+IDEwMDAgKiA2MCAqIDUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLor6Xph43mlrDojrflj5bkuIDmrKHmlbDmja7kuoZcIik7XG4gICAgICAgIHRoaXMuZ2V0Q2F0ZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWwj+S6jui/meS4quaXtumXtOWwseebtOaOpeiwg+eUqOacrOWcsOWtmOWCqOmHjOmdoueahOaVsOaNrlxuICAgICAgICAvLyNyZWdpb24g5L+d5a2Y5pWw5o2uXG4gICAgICAgIHRoaXMuQ2F0ZXMgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhdGVzXCIpLmRhdGE7XG4gICAgICAgIGNvbnN0IGxlZnRNZW51TGlzdCA9IHRoaXMuQ2F0ZXMubWFwKChpdGVtOiBDYXRlc1Byb3BzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2F0X25hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByaWdodENvbmVudCA9IHRoaXMuQ2F0ZXMubWFwKChpdGVtOiBDYXRlc1Byb3BzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uY2hpbGRyZW47XG4gICAgICAgIH0pO1xuICAgICAgICAvKiDnsbvlnovmlq3oqIAgKi9cbiAgICAgICAgY29uc3QgbGVmdE1lbnVMaXN0RCA9IGxlZnRNZW51TGlzdCBhcyBuZXZlcltdO1xuICAgICAgICBjb25zdCByaWdodENvbmVudEQgPSByaWdodENvbmVudCBhcyBuZXZlcltdO1xuICAgICAgICAvLyDkv53lrZjlt6bkvqfoj5zljZXmlbDmja7lkozlj7Pkvqfoj5zljZXmlbDmja5cbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBsZWZ0TWVudUxpc3Q6IGxlZnRNZW51TGlzdEQsXG4gICAgICAgICAgcmlnaHRDb25lbnQ6IHJpZ2h0Q29uZW50RFswXSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8g6I635Y+W5YiG6aG15pWw5o2uXG4gIGFzeW5jIGdldENhdGVzKCkge1xuICAgIC8vIHJlcXVlc3Qoe1xuICAgIC8vICAgdXJsOiBcIi9jYXRlZ29yaWVzXCIsXG4gICAgLy8gfSkudGhlbigocmVzdWx0OiBSZXNwb25zZVByb3BzKSA9PiB7XG4gICAgLy8gICAvLyDkv53lrZjlgLzliLDnvJPlrZjlj5jph4/ph4zpnaJcbiAgICAvLyAgIHRoaXMuQ2F0ZXMgPSByZXN1bHQuZGF0YS5tZXNzYWdlO1xuICAgIC8vICAgLyog5L+d5a2Y5YC85Yiw5pys5Zyw5a2Y5YKo6YeM6Z2iICovXG4gICAgLy8gICB3eC5zZXRTdG9yYWdlU3luYyhcImNhdGVzXCIsIHtcbiAgICAvLyAgICAgdGltZTogRGF0ZS5ub3coKSxcbiAgICAvLyAgICAgZGF0YTogdGhpcy5DYXRlcyxcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgY29uc3QgbGVmdE1lbnVMaXN0ID0gdGhpcy5DYXRlcy5tYXAoKGl0ZW06IENhdGVzUHJvcHMpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGl0ZW0uY2F0X25hbWU7XG4gICAgLy8gICB9KTtcbiAgICAvLyAgIGNvbnN0IHJpZ2h0Q29uZW50ID0gdGhpcy5DYXRlcy5tYXAoKGl0ZW06IENhdGVzUHJvcHMpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGl0ZW0uY2hpbGRyZW47XG4gICAgLy8gICB9KTtcbiAgICAvLyAgIC8qIOexu+Wei+aWreiogCAqL1xuICAgIC8vICAgY29uc3QgbGVmdE1lbnVMaXN0RCA9IGxlZnRNZW51TGlzdCBhcyBuZXZlcltdO1xuICAgIC8vICAgY29uc3QgcmlnaHRDb25lbnREID0gcmlnaHRDb25lbnQgYXMgbmV2ZXJbXTtcbiAgICAvLyAgIC8vIOS/neWtmOW3puS+p+iPnOWNleaVsOaNruWSjOWPs+S+p+iPnOWNleaVsOaNrlxuICAgIC8vICAgdGhpcy5zZXREYXRhKHtcbiAgICAvLyAgICAgbGVmdE1lbnVMaXN0OiBsZWZ0TWVudUxpc3RELFxuICAgIC8vICAgICByaWdodENvbmVudDogcmlnaHRDb25lbnREWzBdLFxuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gICAgY29uc3QgcmVzdWx0OiBhbnkgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBcIi9jYXRlZ29yaWVzXCIgfSk7XG4gICAgLy8g5L+d5a2Y5YC85Yiw57yT5a2Y5Y+Y6YeP6YeM6Z2iXG4gICAgdGhpcy5DYXRlcyA9IHJlc3VsdC5kYXRhLm1lc3NhZ2U7XG4gICAgLyog5L+d5a2Y5YC85Yiw5pys5Zyw5a2Y5YKo6YeM6Z2iICovXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjYXRlc1wiLCB7XG4gICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgZGF0YTogdGhpcy5DYXRlcyxcbiAgICB9KTtcbiAgICBjb25zdCBsZWZ0TWVudUxpc3QgPSB0aGlzLkNhdGVzLm1hcCgoaXRlbTogQ2F0ZXNQcm9wcykgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uY2F0X25hbWU7XG4gICAgfSk7XG4gICAgY29uc3QgcmlnaHRDb25lbnQgPSB0aGlzLkNhdGVzLm1hcCgoaXRlbTogQ2F0ZXNQcm9wcykgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uY2hpbGRyZW47XG4gICAgfSk7XG4gICAgLyog57G75Z6L5pat6KiAICovXG4gICAgY29uc3QgbGVmdE1lbnVMaXN0RCA9IGxlZnRNZW51TGlzdCBhcyBuZXZlcltdO1xuICAgIGNvbnN0IHJpZ2h0Q29uZW50RCA9IHJpZ2h0Q29uZW50IGFzIG5ldmVyW107XG4gICAgLy8g5L+d5a2Y5bem5L6n6I+c5Y2V5pWw5o2u5ZKM5Y+z5L6n6I+c5Y2V5pWw5o2uXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxlZnRNZW51TGlzdDogbGVmdE1lbnVMaXN0RCxcbiAgICAgIHJpZ2h0Q29uZW50OiByaWdodENvbmVudERbMF0sXG4gICAgfSk7XG4gIH0sXG4gIC8vIOeCueWHu+WIh+aNouWVhuWTgeWIhuexu1xuICBoYW5kQ3VycmVudChlOiBhbnkpIHtcbiAgICBjb25zdCB7IGluZGV4IH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAvLyNyZWdpb24g5Y+z5L6n5YiG57G75YiH5o2iXG4gICAgY29uc3QgcmlnaHRDb25lbnQgPSB0aGlzLkNhdGVzLm1hcCgoaXRlbTogQ2F0ZXNQcm9wcykgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uY2hpbGRyZW47XG4gICAgfSk7XG4gICAgLyog57G75Z6L5pat6KiAICovXG4gICAgY29uc3QgcmlnaHRDb25lbnREID0gcmlnaHRDb25lbnQgYXMgbmV2ZXJbXTtcbiAgICAvLyDkv53lrZjlt6bkvqfoj5zljZXmlbDmja7lkozlj7Pkvqfoj5zljZXmlbDmja5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgcmlnaHRDb25lbnQ6IHJpZ2h0Q29uZW50RFtpbmRleF0sXG4gICAgICAvLyDlt6bkvqfoj5zljZXpgInkuK3moLflvI/liIfmjaJcbiAgICAgIGN1cnJlbnRJbmRleDogaW5kZXgsXG4gICAgICAvLyDngrnlh7vlt6bkvqfoj5zljZXorqnlj7Povrnoj5zljZXot53nprvpobbpg6jnmoTot53nprvkuLowXG4gICAgICBzY3JvbGxUb3A6IDAsXG4gICAgfSk7XG4gICAgLy8jZW5kcmVnaW9uXG4gIH0sXG59KTtcbiJdfQ==