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
        const cart = wx.getStorageSync("cart") || [];
        const index = cart.findIndex((v) => v.goods_id === this.goodsInfo.goods_id);
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
            title: "加入成功",
            icon: "success",
            mask: true,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFFRCxjQUFjLEVBQUUsRUFBRTtJQUVsQixTQUFTLEVBQUUsRUFBRTtJQUliLE1BQU0sRUFBRSxVQUFVLE9BQU87UUFFdkIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFSyxjQUFjLENBQUksUUFBVzs7WUFDakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7b0JBQzFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO29CQUk1QyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDMUQsU0FBUyxFQUNULE1BQU0sQ0FDUDtvQkFDRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtpQkFDL0I7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFRCxpQkFBaUIsQ0FBQyxDQUFNO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM1QyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsT0FBTztZQUNQLElBQUk7U0FDTCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsYUFBYTtRQUVYLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTdDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQzFCLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNuRCxDQUFDO1FBQ0YsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFFaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBRUwsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ25CO1FBRUQsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsSUFBSSxFQUFFLFNBQVM7WUFFZixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXhcIjtcblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgZ29vZHNPYmo6IHt9LFxuICB9LFxuICAvLyDngrnlh7vmlL7lpKflm77niYfmiYDnlKjnmoTmlbDmja5cbiAgUHJldmV3SW1hZ2VBcnI6IFtdLFxuICAvLyDllYblk4HnmoTkv6Hmga9cbiAgZ29vZHNJbmZvOiB7fSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgLy8g6I635Y+W5ZWG5ZOBaWRcbiAgICBjb25zdCB7IGdvb2RzX2lkIH0gPSBvcHRpb25zO1xuICAgIHRoaXMuZ2V0R29vZHNEZXRhaWwoZ29vZHNfaWQpO1xuICB9LFxuICAvKiDojrflj5bllYblk4Hor6bmg4UgKi9cbiAgYXN5bmMgZ2V0R29vZHNEZXRhaWw8VD4oZ29vZHNfaWQ6IFQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBcIi9nb29kcy9kZXRhaWxcIiwgZGF0YTogeyBnb29kc19pZCB9IH0pO1xuICAgIHRoaXMuUHJldmV3SW1hZ2VBcnIgPSByZXN1bHQuZGF0YS5tZXNzYWdlLnBpY3M7XG4gICAgdGhpcy5nb29kc0luZm8gPSByZXN1bHQuZGF0YS5tZXNzYWdlO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGdvb2RzT2JqOiB7XG4gICAgICAgIGdvb2RzX25hbWU6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuZ29vZHNfbmFtZSxcbiAgICAgICAgZ29vZHNfcHJpY2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuZ29vZHNfcHJpY2UsXG4gICAgICAgIC8vIGlwaG9uZemDqOWIhuaJi+acuiDkuI3or4bliKsgd2VicOWbvueJh+agvOW8j1xuICAgICAgICAvLyDmnIDlpb3mib7liLDlkI7lj7Ag6K6p5LuW6L+b6KGM5L+u5pS5XG4gICAgICAgIC8vIOS4tOaXtuiHquW3seaUuSDnoa7kv53lkI7lj7DlrZjlnKggMS53ZWJwID0+IDEuanBnXG4gICAgICAgIGdvb2RzX2ludHJvZHVjZTogcmVzdWx0LmRhdGEubWVzc2FnZS5nb29kc19pbnRyb2R1Y2UucmVwbGFjZShcbiAgICAgICAgICAvXFwud2VicC9nLFxuICAgICAgICAgIFwiLmpwZ1wiXG4gICAgICAgICksXG4gICAgICAgIHBpY3M6IHJlc3VsdC5kYXRhLm1lc3NhZ2UucGljcyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8vIOeCueWHu+WbvueJh+aUvuWkp1xuICBoYW5kbGVQcmV2ZXdJbWFnZShlOiBhbnkpIHtcbiAgICAvLyBwaWNzX21pZFxuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IHVybHMgPSB0aGlzLlByZXZld0ltYWdlQXJyLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLnBpY3NfbWlkKTtcbiAgICBjb25zdCBjdXJyZW50ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudXJsO1xuICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICBjdXJyZW50LFxuICAgICAgdXJscyxcbiAgICB9KTtcbiAgfSxcbiAgLy8g6LSt54mp6L2mICDliKnnlKjmnKzlnLDlrZjlgqjmnaXmt7vliqBcbiAgLy8g54K55Ye7IOWKoOWFpei0reeJqei9plxuICBoYW5kbGVDYXJ0QWRkKCkge1xuICAgIC8vIDEg6I635Y+W57yT5a2Y5Lit55qE6LSt54mp6L2mIOaVsOe7hFxuICAgIGNvbnN0IGNhcnQgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhcnRcIikgfHwgW107XG4gICAgLy8gMiDliKTmlq0g5ZWG5ZOB5a+56LGh5piv5ZCm5a2Y5Zyo5LqO6LSt54mp6L2m5pWw57uE5LitXG4gICAgY29uc3QgaW5kZXggPSBjYXJ0LmZpbmRJbmRleChcbiAgICAgICh2OiBhbnkpID0+IHYuZ29vZHNfaWQgPT09IHRoaXMuZ29vZHNJbmZvLmdvb2RzX2lkXG4gICAgKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAvLzMgIOS4jeWtmOWcqCDnrKzkuIDmrKHmt7vliqBcbiAgICAgIHRoaXMuZ29vZHNJbmZvLm51bSA9IDE7XG4gICAgICB0aGlzLmdvb2RzSW5mby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGNhcnQucHVzaCh0aGlzLmdvb2RzSW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIDQg5bey57uP5a2Y5Zyo6LSt54mp6L2m5pWw5o2uIOaJp+ihjCBudW0rK1xuICAgICAgY2FydFtpbmRleF0ubnVtKys7XG4gICAgfVxuICAgIC8vIDUg5oqK6LSt54mp6L2m6YeN5paw5re75Yqg5Zue57yT5a2Y5LitXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoXCJjYXJ0XCIsIGNhcnQpO1xuICAgIC8vIDYg5by556qX5o+Q56S6XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiBcIuWKoOWFpeaIkOWKn1wiLFxuICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAvLyB0cnVlIOmYsuatoueUqOaItyDmiYvmipYg55av54uC54K55Ye75oyJ6ZKuXG4gICAgICBtYXNrOiB0cnVlLFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=