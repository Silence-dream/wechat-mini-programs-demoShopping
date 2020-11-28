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
    goodsInfo: [],
    onLoad: function (options) {
        const { goods_id } = options;
        this.getGoodsDetail(goods_id);
    },
    getGoodsDetail(goods_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield index_1.request({ url: "/goods/detail", data: { goods_id } });
            this.goodsInfo = result.data.message.pics;
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
        const urls = this.goodsInfo.map((item) => item.pics_mid);
        const current = e.currentTarget.dataset.url;
        wx.previewImage({
            current,
            urls,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFDRCxTQUFTLEVBQUUsRUFBRTtJQUliLE1BQU0sRUFBRSxVQUFVLE9BQU87UUFFdkIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFSyxjQUFjLENBQUksUUFBVzs7WUFDakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRTtvQkFDUixVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtvQkFDMUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7b0JBSTVDLGVBQWUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUMxRCxTQUFTLEVBQ1QsTUFBTSxDQUNQO29CQUNELElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2lCQUMvQjthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVELGlCQUFpQixDQUFDLENBQUM7UUFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZCxPQUFPO1lBQ1AsSUFBSTtTQUNMLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXhcIjtcblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgZ29vZHNPYmo6IHt9LFxuICB9LFxuICBnb29kc0luZm86IFtdLFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLyDojrflj5bllYblk4FpZFxuICAgIGNvbnN0IHsgZ29vZHNfaWQgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5nZXRHb29kc0RldGFpbChnb29kc19pZCk7XG4gIH0sXG4gIC8qIOiOt+WPluWVhuWTgeivpuaDhSAqL1xuICBhc3luYyBnZXRHb29kc0RldGFpbDxUPihnb29kc19pZDogVCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6IFwiL2dvb2RzL2RldGFpbFwiLCBkYXRhOiB7IGdvb2RzX2lkIH0gfSk7XG4gICAgdGhpcy5nb29kc0luZm8gPSByZXN1bHQuZGF0YS5tZXNzYWdlLnBpY3M7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGdvb2RzT2JqOiB7XG4gICAgICAgIGdvb2RzX25hbWU6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuZ29vZHNfbmFtZSxcbiAgICAgICAgZ29vZHNfcHJpY2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UuZ29vZHNfcHJpY2UsXG4gICAgICAgIC8vIGlwaG9uZemDqOWIhuaJi+acuiDkuI3or4bliKsgd2VicOWbvueJh+agvOW8j1xuICAgICAgICAvLyDmnIDlpb3mib7liLDlkI7lj7Ag6K6p5LuW6L+b6KGM5L+u5pS5XG4gICAgICAgIC8vIOS4tOaXtuiHquW3seaUuSDnoa7kv53lkI7lj7DlrZjlnKggMS53ZWJwID0+IDEuanBnXG4gICAgICAgIGdvb2RzX2ludHJvZHVjZTogcmVzdWx0LmRhdGEubWVzc2FnZS5nb29kc19pbnRyb2R1Y2UucmVwbGFjZShcbiAgICAgICAgICAvXFwud2VicC9nLFxuICAgICAgICAgIFwiLmpwZ1wiXG4gICAgICAgICksXG4gICAgICAgIHBpY3M6IHJlc3VsdC5kYXRhLm1lc3NhZ2UucGljcyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8vIOeCueWHu+WbvueJh+aUvuWkp1xuICBoYW5kbGVQcmV2ZXdJbWFnZShlKSB7XG4gICAgLy8gcGljc19taWRcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zdCB1cmxzID0gdGhpcy5nb29kc0luZm8ubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0ucGljc19taWQpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC51cmw7XG4gICAgd3gucHJldmlld0ltYWdlKHtcbiAgICAgIGN1cnJlbnQsXG4gICAgICB1cmxzLFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=