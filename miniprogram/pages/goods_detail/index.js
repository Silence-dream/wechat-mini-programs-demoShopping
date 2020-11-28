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
    onLoad: function (options) {
        const { goods_id } = options;
        this.getGoodsDetail(goods_id);
    },
    getGoodsDetail(goods_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield index_1.request({ url: "/goods/detail", data: { goods_id } });
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBRXZCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUssY0FBYyxDQUFJLFFBQVc7O1lBQ2pDLE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7b0JBQzFDLFdBQVcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO29CQUk1QyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FDMUQsU0FBUyxFQUNULE1BQU0sQ0FDUDtvQkFDRCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtpQkFDL0I7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXhcIjtcblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgZ29vZHNPYmo6IHt9LFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIC8vIOiOt+WPluWVhuWTgWlkXG4gICAgY29uc3QgeyBnb29kc19pZCB9ID0gb3B0aW9ucztcbiAgICB0aGlzLmdldEdvb2RzRGV0YWlsKGdvb2RzX2lkKTtcbiAgfSxcbiAgLyog6I635Y+W5ZWG5ZOB6K+m5oOFICovXG4gIGFzeW5jIGdldEdvb2RzRGV0YWlsPFQ+KGdvb2RzX2lkOiBUKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdCh7IHVybDogXCIvZ29vZHMvZGV0YWlsXCIsIGRhdGE6IHsgZ29vZHNfaWQgfSB9KTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZ29vZHNPYmo6IHtcbiAgICAgICAgZ29vZHNfbmFtZTogcmVzdWx0LmRhdGEubWVzc2FnZS5nb29kc19uYW1lLFxuICAgICAgICBnb29kc19wcmljZTogcmVzdWx0LmRhdGEubWVzc2FnZS5nb29kc19wcmljZSxcbiAgICAgICAgLy8gaXBob25l6YOo5YiG5omL5py6IOS4jeivhuWIqyB3ZWJw5Zu+54mH5qC85byPXG4gICAgICAgIC8vIOacgOWlveaJvuWIsOWQjuWPsCDorqnku5bov5vooYzkv67mlLlcbiAgICAgICAgLy8g5Li05pe26Ieq5bex5pS5IOehruS/neWQjuWPsOWtmOWcqCAxLndlYnAgPT4gMS5qcGdcbiAgICAgICAgZ29vZHNfaW50cm9kdWNlOiByZXN1bHQuZGF0YS5tZXNzYWdlLmdvb2RzX2ludHJvZHVjZS5yZXBsYWNlKFxuICAgICAgICAgIC9cXC53ZWJwL2csXG4gICAgICAgICAgXCIuanBnXCJcbiAgICAgICAgKSxcbiAgICAgICAgcGljczogcmVzdWx0LmRhdGEubWVzc2FnZS5waWNzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIl19