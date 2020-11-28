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
                goodsObj: result.data.message,
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO0tBQ2I7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBRXZCLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUssY0FBYyxDQUFJLFFBQVc7O1lBQ2pDLE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO2FBQzlCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVxdWVzdC9pbmRleFwiO1xuUGFnZSh7XG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBnb29kc09iajoge30sXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgLy8g6I635Y+W5ZWG5ZOBaWRcbiAgICBjb25zdCB7IGdvb2RzX2lkIH0gPSBvcHRpb25zO1xuICAgIHRoaXMuZ2V0R29vZHNEZXRhaWwoZ29vZHNfaWQpO1xuICB9LFxuICAvKiDojrflj5bllYblk4Hor6bmg4UgKi9cbiAgYXN5bmMgZ2V0R29vZHNEZXRhaWw8VD4oZ29vZHNfaWQ6IFQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBcIi9nb29kcy9kZXRhaWxcIiwgZGF0YTogeyBnb29kc19pZCB9IH0pO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBnb29kc09iajogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuIl19