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
        goodsObj: {},
    },
    PrevewImageArr: [],
    goodsInfo: {},
    onLoad: function (options) {
        const { goods_id } = options;
        this.getGoodsDetail(goods_id);
    },
    getGoodsDetail(goods_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield index_1.request({ url: "/goods/detail", data: { goods_id } });
            this.PrevewImageArr = result.data.message.pics;
            this.goodsInfo = result.data.message;
            console.log(result);
            this.setData({
                goodsObj: {
                    goods_name: result.data.message.goods_name,
                    goods_price: result.data.message.goods_price,
                    goods_introduce: result.data.message.goods_introduce.replace(/\.webp/g, ".jpg"),
                    pics: result.data.message.pics,
                },
            });
        });
    },
    handlePrevewImage(e) {
        console.log(e);
        const urls = this.PrevewImageArr.map((item) => item.pics_mid);
        const current = e.currentTarget.dataset.url;
        wx.previewImage({
            current,
            urls,
        });
    },
    handleCartAdd() {
        let cart = wx.getStorageSync("cart") || [];
        let index = cart.findIndex((v) => v.goods_id === this.goodsInfo.goods_id);
        if (index === -1) {
            this.goodsInfo.num = 1;
            this.goodsInfo.checked = true;
            cart.push(this.goodsInfo);
        }
        else {
            cart[index].num++;
        }
        wx.setStorageSync("cart", cart);
        wx.showToast({
            title: '加入成功',
            icon: 'success',
            mask: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFFRCxjQUFjLEVBQUUsRUFBRTtJQUVsQixTQUFTLEVBQUUsRUFBRTtJQUliLE1BQU0sRUFBRSxVQUFVLE9BQU87UUFFdkIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFSyxjQUFjLENBQUksUUFBVzs7WUFDakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7b0JBQzFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO29CQUk1QyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDMUQsU0FBUyxFQUNULE1BQU0sQ0FDUDtvQkFDRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtpQkFDL0I7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFRCxpQkFBaUIsQ0FBQyxDQUFNO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM1QyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsT0FBTztZQUNQLElBQUk7U0FDTCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsYUFBYTtRQUVYLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTNDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUVoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFFTCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFFRCxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoQyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsU0FBUztZQUVmLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVxdWVzdC9pbmRleFwiO1xuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBnb29kc09iajoge30sXG4gIH0sXG4gIC8vIOeCueWHu+aUvuWkp+WbvueJh+aJgOeUqOeahOaVsOaNrlxuICBQcmV2ZXdJbWFnZUFycjogW10sXG4gIC8vIOWVhuWTgeeahOS/oeaBr1xuICBnb29kc0luZm86IHt9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLyDojrflj5bllYblk4FpZFxuICAgIGNvbnN0IHsgZ29vZHNfaWQgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5nZXRHb29kc0RldGFpbChnb29kc19pZCk7XG4gIH0sXG4gIC8qIOiOt+WPluWVhuWTgeivpuaDhSAqL1xuICBhc3luYyBnZXRHb29kc0RldGFpbDxUPihnb29kc19pZDogVCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6IFwiL2dvb2RzL2RldGFpbFwiLCBkYXRhOiB7IGdvb2RzX2lkIH0gfSk7XG4gICAgdGhpcy5QcmV2ZXdJbWFnZUFyciA9IHJlc3VsdC5kYXRhLm1lc3NhZ2UucGljcztcbiAgICB0aGlzLmdvb2RzSW5mbyA9IHJlc3VsdC5kYXRhLm1lc3NhZ2U7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZ29vZHNPYmo6IHtcbiAgICAgICAgZ29vZHNfbmFtZTogcmVzdWx0LmRhdGEubWVzc2FnZS5nb29kc19uYW1lLFxuICAgICAgICBnb29kc19wcmljZTogcmVzdWx0LmRhdGEubWVzc2FnZS5nb29kc19wcmljZSxcbiAgICAgICAgLy8gaXBob25l6YOo5YiG5omL5py6IOS4jeivhuWIqyB3ZWJw5Zu+54mH5qC85byPXG4gICAgICAgIC8vIOacgOWlveaJvuWIsOWQjuWPsCDorqnku5bov5vooYzkv67mlLlcbiAgICAgICAgLy8g5Li05pe26Ieq5bex5pS5IOehruS/neWQjuWPsOWtmOWcqCAxLndlYnAgPT4gMS5qcGdcbiAgICAgICAgZ29vZHNfaW50cm9kdWNlOiByZXN1bHQuZGF0YS5tZXNzYWdlLmdvb2RzX2ludHJvZHVjZS5yZXBsYWNlKFxuICAgICAgICAgIC9cXC53ZWJwL2csXG4gICAgICAgICAgXCIuanBnXCJcbiAgICAgICAgKSxcbiAgICAgICAgcGljczogcmVzdWx0LmRhdGEubWVzc2FnZS5waWNzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgLy8g54K55Ye75Zu+54mH5pS+5aSnXG4gIGhhbmRsZVByZXZld0ltYWdlKGU6IGFueSkge1xuICAgIC8vIHBpY3NfbWlkXG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgY29uc3QgdXJscyA9IHRoaXMuUHJldmV3SW1hZ2VBcnIubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0ucGljc19taWQpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC51cmw7XG4gICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICB1cmxzLFxuICAgIH0pO1xuICB9LFxuICAvLyDotK3nianovaYgIOWIqeeUqOacrOWcsOWtmOWCqOadpea3u+WKoFxuICAvLyDngrnlh7sg5Yqg5YWl6LSt54mp6L2mXG4gIGhhbmRsZUNhcnRBZGQoKSB7XG4gICAgLy8gMSDojrflj5bnvJPlrZjkuK3nmoTotK3nianovaYg5pWw57uEXG4gICAgbGV0IGNhcnQgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhcnRcIikgfHwgW107XG4gICAgLy8gMiDliKTmlq0g5ZWG5ZOB5a+56LGh5piv5ZCm5a2Y5Zyo5LqO6LSt54mp6L2m5pWw57uE5LitXG4gICAgbGV0IGluZGV4ID0gY2FydC5maW5kSW5kZXgoKHY6YW55KSA9PiB2Lmdvb2RzX2lkID09PSB0aGlzLmdvb2RzSW5mby5nb29kc19pZCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgLy8zICDkuI3lrZjlnKgg56ys5LiA5qyh5re75YqgXG4gICAgICB0aGlzLmdvb2RzSW5mby5udW0gPSAxO1xuICAgICAgdGhpcy5nb29kc0luZm8uY2hlY2tlZCA9IHRydWU7XG4gICAgICBjYXJ0LnB1c2godGhpcy5nb29kc0luZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyA0IOW3sue7j+WtmOWcqOi0reeJqei9puaVsOaNriDmiafooYwgbnVtKytcbiAgICAgIGNhcnRbaW5kZXhdLm51bSsrO1xuICAgIH1cbiAgICAvLyA1IOaKiui0reeJqei9pumHjeaWsOa3u+WKoOWbnue8k+WtmOS4rVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiY2FydFwiLCBjYXJ0KTtcbiAgICAvLyA2IOW8ueeql+aPkOekulxuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WKoOWFpeaIkOWKnycsXG4gICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAvLyB0cnVlIOmYsuatoueUqOaItyDmiYvmipYg55av54uC54K55Ye75oyJ6ZKuIFxuICAgICAgbWFzazogdHJ1ZVxuICAgIH0pO1xufSk7XG4iXX0=