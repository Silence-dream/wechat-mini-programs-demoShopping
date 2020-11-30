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
const asyncWX_js_1 = require("../../utils/asyncWX.js");
const index_js_1 = require("../../request/index.js");
Page({
    data: {
        address: {},
        cart: [],
        totalPrice: 0,
        totalNum: 0,
    },
    onShow() {
        const address = wx.getStorageSync("address");
        let cart = wx.getStorageSync("cart") || [];
        cart = cart.filter((v) => v.checked);
        this.setData({ address });
        let totalPrice = 0;
        let totalNum = 0;
        cart.forEach((v) => {
            totalPrice += v.num * v.goods_price;
            totalNum += v.num;
        });
        this.setData({
            cart,
            totalPrice,
            totalNum,
            address,
        });
    },
    handleOrderPay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = wx.getStorageSync("token");
                if (!token) {
                    wx.navigateTo({
                        url: "/pages/auth/index",
                    });
                    return;
                }
                const order_price = this.data.totalPrice;
                const consignee_addr = this.data.address.all;
                const cart = this.data.cart;
                const goods = [];
                cart.forEach((v) => goods.push({
                    goods_id: v.goods_id,
                    goods_number: v.num,
                    goods_price: v.goods_price,
                }));
                const orderParams = { order_price, consignee_addr, goods };
                const { order_number } = yield index_js_1.request({
                    url: "/my/orders/create",
                    method: "POST",
                    data: orderParams,
                });
                const { pay } = yield index_js_1.request({
                    url: "/my/orders/req_unifiedorder",
                    method: "POST",
                    data: { order_number },
                });
                yield asyncWX_js_1.requestPayment(pay);
                const res = yield index_js_1.request({
                    url: "/my/orders/chkOrder",
                    method: "POST",
                    data: { order_number },
                });
                yield asyncWX_js_1.showToast({ title: "支付成功" });
                let newCart = wx.getStorageSync("cart");
                newCart = newCart.filter((v) => !v.checked);
                wx.setStorageSync("cart", newCart);
                wx.navigateTo({
                    url: "/pages/order/index",
                });
            }
            catch (error) {
                yield asyncWX_js_1.showToast({ title: "支付失败" });
                console.log(error);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdURBT2dDO0FBRWhDLHFEQUFpRDtBQUNqRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsQ0FBQztLQUNaO0lBQ0QsTUFBTTtRQUVKLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFM0MsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUcxQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUN0QixVQUFVLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3BDLFFBQVEsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUk7WUFDSixVQUFVO1lBQ1YsUUFBUTtZQUNSLE9BQU87U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUssY0FBYzs7WUFDbEIsSUFBSTtnQkFFRixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV6QyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQ1osR0FBRyxFQUFFLG1CQUFtQjtxQkFDekIsQ0FBQyxDQUFDO29CQUNILE9BQU87aUJBQ1I7Z0JBS0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3pDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDN0MsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1QsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO29CQUNwQixZQUFZLEVBQUUsQ0FBQyxDQUFDLEdBQUc7b0JBQ25CLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVztpQkFDM0IsQ0FBQyxDQUNILENBQUM7Z0JBQ0YsTUFBTSxXQUFXLEdBQUcsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUUzRCxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsTUFBTSxrQkFBTyxDQUFDO29CQUNyQyxHQUFHLEVBQUUsbUJBQW1CO29CQUN4QixNQUFNLEVBQUUsTUFBTTtvQkFDZCxJQUFJLEVBQUUsV0FBVztpQkFDbEIsQ0FBQyxDQUFDO2dCQUVILE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLGtCQUFPLENBQUM7b0JBQzVCLEdBQUcsRUFBRSw2QkFBNkI7b0JBQ2xDLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRTtpQkFDdkIsQ0FBQyxDQUFDO2dCQUVILE1BQU0sMkJBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFMUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxrQkFBTyxDQUFDO29CQUN4QixHQUFHLEVBQUUscUJBQXFCO29CQUMxQixNQUFNLEVBQUUsTUFBTTtvQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUU7aUJBQ3ZCLENBQUMsQ0FBQztnQkFDSCxNQUFNLHNCQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFFbkMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFHbkMsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsb0JBQW9CO2lCQUMxQixDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sc0JBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQztLQUFBO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBnZXRTZXR0aW5nLFxyXG4gIGNob29zZUFkZHJlc3MsXHJcbiAgb3BlblNldHRpbmcsXHJcbiAgc2hvd01vZGFsLFxyXG4gIHNob3dUb2FzdCxcclxuICByZXF1ZXN0UGF5bWVudCxcclxufSBmcm9tIFwiLi4vLi4vdXRpbHMvYXN5bmNXWC5qc1wiO1xyXG5pbXBvcnQgcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCIuLi8uLi9saWIvcnVudGltZS9ydW50aW1lXCI7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vcmVxdWVzdC9pbmRleC5qc1wiO1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBhZGRyZXNzOiB7fSxcclxuICAgIGNhcnQ6IFtdLFxyXG4gICAgdG90YWxQcmljZTogMCxcclxuICAgIHRvdGFsTnVtOiAwLFxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgLy8gMSDojrflj5bnvJPlrZjkuK3nmoTmlLbotKflnLDlnYDkv6Hmga9cclxuICAgIGNvbnN0IGFkZHJlc3MgPSB3eC5nZXRTdG9yYWdlU3luYyhcImFkZHJlc3NcIik7XHJcbiAgICAvLyAxIOiOt+WPlue8k+WtmOS4reeahOi0reeJqei9puaVsOaNrlxyXG4gICAgbGV0IGNhcnQgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhcnRcIikgfHwgW107XHJcbiAgICAvLyDov4fmu6TlkI7nmoTotK3nianovabmlbDnu4RcclxuICAgIGNhcnQgPSBjYXJ0LmZpbHRlcigodjogYW55KSA9PiB2LmNoZWNrZWQpO1xyXG4gICAgdGhpcy5zZXREYXRhKHsgYWRkcmVzcyB9KTtcclxuXHJcbiAgICAvLyAxIOaAu+S7t+agvCDmgLvmlbDph49cclxuICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuICAgIGxldCB0b3RhbE51bSA9IDA7XHJcbiAgICBjYXJ0LmZvckVhY2goKHY6IGFueSkgPT4ge1xyXG4gICAgICB0b3RhbFByaWNlICs9IHYubnVtICogdi5nb29kc19wcmljZTtcclxuICAgICAgdG90YWxOdW0gKz0gdi5udW07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGNhcnQsXHJcbiAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgIHRvdGFsTnVtLFxyXG4gICAgICBhZGRyZXNzLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvLyDngrnlh7sg5pSv5LuYXHJcbiAgYXN5bmMgaGFuZGxlT3JkZXJQYXkoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyAxIOWIpOaWree8k+WtmOS4reacieayoeaciXRva2VuXHJcbiAgICAgIGNvbnN0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKTtcclxuICAgICAgLy8gMiDliKTmlq1cclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9hdXRoL2luZGV4XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIDMg5Yib5bu66K6i5Y2VXHJcbiAgICAgIC8vIDMuMSDlh4blpIcg6K+35rGC5aS05Y+C5pWwXHJcbiAgICAgIC8vIGNvbnN0IGhlYWRlciA9IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfTtcclxuICAgICAgLy8gMy4yIOWHhuWkhyDor7fmsYLkvZPlj4LmlbBcclxuICAgICAgY29uc3Qgb3JkZXJfcHJpY2UgPSB0aGlzLmRhdGEudG90YWxQcmljZTtcclxuICAgICAgY29uc3QgY29uc2lnbmVlX2FkZHIgPSB0aGlzLmRhdGEuYWRkcmVzcy5hbGw7XHJcbiAgICAgIGNvbnN0IGNhcnQgPSB0aGlzLmRhdGEuY2FydDtcclxuICAgICAgY29uc3QgZ29vZHMgPSBbXTtcclxuICAgICAgY2FydC5mb3JFYWNoKCh2KSA9PlxyXG4gICAgICAgIGdvb2RzLnB1c2goe1xyXG4gICAgICAgICAgZ29vZHNfaWQ6IHYuZ29vZHNfaWQsXHJcbiAgICAgICAgICBnb29kc19udW1iZXI6IHYubnVtLFxyXG4gICAgICAgICAgZ29vZHNfcHJpY2U6IHYuZ29vZHNfcHJpY2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgb3JkZXJQYXJhbXMgPSB7IG9yZGVyX3ByaWNlLCBjb25zaWduZWVfYWRkciwgZ29vZHMgfTtcclxuICAgICAgLy8gNCDlh4blpIflj5HpgIHor7fmsYIg5Yib5bu66K6i5Y2VIOiOt+WPluiuouWNlee8luWPt1xyXG4gICAgICBjb25zdCB7IG9yZGVyX251bWJlciB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBcIi9teS9vcmRlcnMvY3JlYXRlXCIsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBkYXRhOiBvcmRlclBhcmFtcyxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIDUg5Y+R6LW3IOmihOaUr+S7mOaOpeWPo1xyXG4gICAgICBjb25zdCB7IHBheSB9ID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBcIi9teS9vcmRlcnMvcmVxX3VuaWZpZWRvcmRlclwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgZGF0YTogeyBvcmRlcl9udW1iZXIgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIDYg5Y+R6LW35b6u5L+h5pSv5LuYXHJcbiAgICAgIGF3YWl0IHJlcXVlc3RQYXltZW50KHBheSk7XHJcbiAgICAgIC8vIDcg5p+l6K+i5ZCO5Y+wIOiuouWNleeKtuaAgVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFwiL215L29yZGVycy9jaGtPcmRlclwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgZGF0YTogeyBvcmRlcl9udW1iZXIgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHNob3dUb2FzdCh7IHRpdGxlOiBcIuaUr+S7mOaIkOWKn1wiIH0pO1xyXG4gICAgICAvLyA4IOaJi+WKqOWIoOmZpOe8k+WtmOS4rSDlt7Lnu4/mlK/ku5jkuobnmoTllYblk4FcclxuICAgICAgbGV0IG5ld0NhcnQgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhcnRcIik7XHJcbiAgICAgIG5ld0NhcnQgPSBuZXdDYXJ0LmZpbHRlcigodikgPT4gIXYuY2hlY2tlZCk7XHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwiY2FydFwiLCBuZXdDYXJ0KTtcclxuXHJcbiAgICAgIC8vIDgg5pSv5LuY5oiQ5Yqf5LqGIOi3s+i9rOWIsOiuouWNlemhtemdolxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL3BhZ2VzL29yZGVyL2luZGV4XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYXdhaXQgc2hvd1RvYXN0KHsgdGl0bGU6IFwi5pSv5LuY5aSx6LSlXCIgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIl19