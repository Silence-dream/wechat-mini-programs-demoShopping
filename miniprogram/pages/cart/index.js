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
const asyncWX_1 = require("../../utils/asyncWX");
Page({
    data: {
        address: {},
        cart: [],
        allChecked: false,
        totalPrice: 0,
        totalNum: 0,
    },
    onShow() {
        const address = wx.getStorageSync("address") || {};
        const cart = wx.getStorageSync("cart") || [];
        let allChecked = cart.length;
        let totalPrice = 0;
        let totalNum = 0;
        cart.forEach((v) => {
            if (v.checked) {
                totalPrice += v.num * v.goods_price;
                totalNum += v.num;
            }
            else {
                allChecked = false;
            }
        });
        allChecked = cart.length !== 0 ? allChecked : false;
        console.log(address);
        this.setData({
            address,
            cart,
            allChecked,
            totalPrice,
            totalNum,
        });
    },
    handleChooseAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const address = yield asyncWX_1.chooseAddress();
                address.all =
                    address.provinceName +
                        address.cityName +
                        address.countyName +
                        address.detailInfo;
                wx.setStorageSync("address", address);
            }
            catch (error) {
                console.log(error);
            }
        });
    },
    handeItemChange(e) {
        const goods_id = e.currentTarget.dataset.id;
        const { cart } = this.data;
        const index = cart.findIndex((v) => v.goods_id === goods_id);
        cart[index].checked = !cart[index].checked;
        this.setCart(cart);
    },
    setCart(cart) {
        let allChecked = true;
        let totalPrice = 0;
        let totalNum = 0;
        cart.forEach((v) => {
            if (v.checked) {
                totalPrice += v.num * v.goods_price;
                totalNum += v.num;
            }
            else {
                allChecked = false;
            }
        });
        allChecked = cart.length !== 0 ? allChecked : false;
        this.setData({
            cart,
            totalPrice,
            totalNum,
            allChecked,
        });
        wx.setStorageSync("cart", cart);
    },
    handleItemAllCheck() {
        let { cart, allChecked } = this.data;
        allChecked = !allChecked;
        cart.forEach((v) => (v.checked = allChecked));
        this.setCart(cart);
    },
    handleItemNumEdit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const { operation, id } = e.currentTarget.dataset;
            const { cart } = this.data;
            const index = cart.findIndex((v) => v.goods_id === id);
            if (cart[index].num === 1 && operation === -1) {
                const res = yield asyncWX_1.showModal({ content: "您是否要删除？" });
                if (res.confirm) {
                    cart.splice(index, 1);
                    this.setCart(cart);
                }
            }
            else {
                cart[index].num += operation;
                this.setCart(cart);
            }
        });
    },
    handlePay() {
        return __awaiter(this, void 0, void 0, function* () {
            const { address, totalNum } = this.data;
            if (!address.userName) {
                yield asyncWX_1.showToast({ title: "您还没有选择收货地址" });
                return;
            }
            if (totalNum === 0) {
                yield asyncWX_1.showToast({ title: "您还没有选购商品" });
                return;
            }
            wx.navigateTo({
                url: "/pages/pay/index",
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaURBQTBFO0FBQzFFLElBQUksQ0FBQztJQUlILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxFQUFFO1FBQ1gsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsS0FBSztRQUNqQixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO0tBQ1o7SUFDRCxNQUFNO1FBRUosTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbkQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFN0MsSUFBSSxVQUFVLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUl0QyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2IsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDcEMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxPQUFPO1lBQ1AsSUFB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QUFFLENBQUMsQ0FBQztZQUU1RCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFFN0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxtQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BELElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtvQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEI7YUFDRjtpQkFBTTtnQkFFTCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQztnQkFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUM7S0FBQTtJQUVLLFNBQVM7O1lBRWIsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUNyQixNQUFNLG1CQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDekMsT0FBTzthQUNSO1lBRUQsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixNQUFNLG1CQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNSO1lBRUQsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsa0JBQWtCO2FBQ3hCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNob29zZUFkZHJlc3MsIHNob3dNb2RhbCwgc2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FzeW5jV1hcIjtcblBhZ2Uoe1xuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgYWRkcmVzczoge30sXG4gICAgY2FydDogW10sXG4gICAgYWxsQ2hlY2tlZDogZmFsc2UsXG4gICAgdG90YWxQcmljZTogMCxcbiAgICB0b3RhbE51bTogMCxcbiAgfSxcbiAgb25TaG93KCkge1xuICAgIC8vIOmhtemdouaYvuekuuiOt+WPluacrOWcsOWtmOWCqOmHjOmdoueahOaVsOaNrue7mWFkZHJlc3NcbiAgICBjb25zdCBhZGRyZXNzID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJhZGRyZXNzXCIpIHx8IHt9O1xuICAgIC8vIOiOt+WPlueUqOaIt+eahOa3u+WKoOeahOi0reeJqei9plxuICAgIGNvbnN0IGNhcnQgPSB3eC5nZXRTdG9yYWdlU3luYyhcImNhcnRcIikgfHwgW107XG4gICAgLy8g5YWo6YCJ5oyJ6ZKu55qE6YCJ5oup54q25oCBXG4gICAgbGV0IGFsbENoZWNrZWQ6IGJvb2xlYW4gPSBjYXJ0Lmxlbmd0aDtcbiAgICAvLyAgID8gY2FydC5ldmVyeSgoaXRlbTogYW55KSA9PiBpdGVtLmNoZWNrZWQpXG4gICAgLy8gICA6IGZhbHNlO1xuICAgIC8vIDEg5oC75Lu35qC8IOaAu+aVsOmHj1xuICAgIGxldCB0b3RhbFByaWNlID0gMDtcbiAgICBsZXQgdG90YWxOdW0gPSAwO1xuICAgIGNhcnQuZm9yRWFjaCgodjogYW55KSA9PiB7XG4gICAgICBpZiAodi5jaGVja2VkKSB7XG4gICAgICAgIHRvdGFsUHJpY2UgKz0gdi5udW0gKiB2Lmdvb2RzX3ByaWNlO1xuICAgICAgICB0b3RhbE51bSArPSB2Lm51bTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDliKTmlq3mlbDnu4TmmK/lkKbkuLrnqbpcbiAgICBhbGxDaGVja2VkID0gY2FydC5sZW5ndGggIT09IDAgPyBhbGxDaGVja2VkIDogZmFsc2U7XG4gICAgY29uc29sZS5sb2coYWRkcmVzcyk7XG4gICAgLy8g5L+d5a2Y5YiwZGF0YemHjOmdolxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBhZGRyZXNzLFxuICAgICAgY2FydCxcbiAgICAgIGFsbENoZWNrZWQsXG4gICAgICB0b3RhbFByaWNlLFxuICAgICAgdG90YWxOdW0sXG4gICAgfSk7XG4gIH0sXG4gIC8vIOiOt+WPlueUqOaIt+aUtuiOt+WcsOWdgFxuICBhc3luYyBoYW5kbGVDaG9vc2VBZGRyZXNzKCkge1xuICAgIC8vICAgaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vY29tbXVuaXR5L2RldmVsb3AvZG9jLzAwMGMwYTBhNTkwNDkwNTkwZDBiYTBjM2Q1MTgwMVxuICAgIC8vIOaWsOeJiOacrOW3sue7j+S4jemcgOimgeaOiOadg+WwseWPr+S7peebtOaOpeaLv+WIsOeUqOaIt+eahOaUtui0p+WcsOWdgOS6hlxuICAgIHRyeSB7XG4gICAgICAvLyDojrflj5bnlKjmiLfmlLbotKflnLDlnYBcbiAgICAgIGNvbnN0IGFkZHJlc3M6IGFueSA9IGF3YWl0IGNob29zZUFkZHJlc3MoKTtcbiAgICAgIGFkZHJlc3MuYWxsID1cbiAgICAgICAgYWRkcmVzcy5wcm92aW5jZU5hbWUgK1xuICAgICAgICBhZGRyZXNzLmNpdHlOYW1lICtcbiAgICAgICAgYWRkcmVzcy5jb3VudHlOYW1lICtcbiAgICAgICAgYWRkcmVzcy5kZXRhaWxJbmZvO1xuICAgICAgLy8g5L+d5a2Y5Yiw5pys5Zyw5a2Y5YKo6YeM6Z2iXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhcImFkZHJlc3NcIiwgYWRkcmVzcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8g5ZWG5ZOB55qE6YCJ5LitXG4gIGhhbmRlSXRlbUNoYW5nZShlOiBhbnkpIHtcbiAgICAvLyAxIOiOt+WPluiiq+S/ruaUueeahOWVhuWTgeeahGlkXG4gICAgY29uc3QgZ29vZHNfaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICAvLyAyIOiOt+WPlui0reeJqei9puaVsOe7hFxuICAgIGNvbnN0IHsgY2FydCB9ID0gdGhpcy5kYXRhO1xuICAgIC8vIDMg5om+5Yiw6KKr5L+u5pS555qE5ZWG5ZOB5a+56LGhXG4gICAgY29uc3QgaW5kZXggPSBjYXJ0LmZpbmRJbmRleCgodikgPT4gdi5nb29kc19pZCA9PT0gZ29vZHNfaWQpO1xuICAgIC8vIDQg6YCJ5Lit54q25oCB5Y+W5Y+NXG4gICAgY2FydFtpbmRleF0uY2hlY2tlZCA9ICFjYXJ0W2luZGV4XS5jaGVja2VkO1xuXG4gICAgdGhpcy5zZXRDYXJ0KGNhcnQpO1xuICB9LFxuICAvLyDorr7nva7otK3nianovabnirbmgIHlkIzml7Yg6YeN5paw6K6h566XIOW6lemDqOW3peWFt+agj+eahOaVsOaNriDlhajpgIkg5oC75Lu35qC8IOi0reS5sOeahOaVsOmHj1xuICBzZXRDYXJ0KGNhcnQ6IGFueSkge1xuICAgIGxldCBhbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAvLyAxIOaAu+S7t+agvCDmgLvmlbDph49cbiAgICBsZXQgdG90YWxQcmljZSA9IDA7XG4gICAgbGV0IHRvdGFsTnVtID0gMDtcbiAgICBjYXJ0LmZvckVhY2goKHY6IGFueSkgPT4ge1xuICAgICAgaWYgKHYuY2hlY2tlZCkge1xuICAgICAgICB0b3RhbFByaWNlICs9IHYubnVtICogdi5nb29kc19wcmljZTtcbiAgICAgICAgdG90YWxOdW0gKz0gdi5udW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g5Yik5pat5pWw57uE5piv5ZCm5Li656m6XG4gICAgYWxsQ2hlY2tlZCA9IGNhcnQubGVuZ3RoICE9PSAwID8gYWxsQ2hlY2tlZCA6IGZhbHNlO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBjYXJ0LFxuICAgICAgdG90YWxQcmljZSxcbiAgICAgIHRvdGFsTnVtLFxuICAgICAgYWxsQ2hlY2tlZCxcbiAgICB9KTtcbiAgICB3eC5zZXRTdG9yYWdlU3luYyhcImNhcnRcIiwgY2FydCk7XG4gIH0sXG4gIC8vIOWVhuWTgeWFqOmAieWKn+iDvVxuICBoYW5kbGVJdGVtQWxsQ2hlY2soKSB7XG4gICAgLy8gMSDojrflj5ZkYXRh5Lit55qE5pWw5o2uXG4gICAgbGV0IHsgY2FydCwgYWxsQ2hlY2tlZCB9ID0gdGhpcy5kYXRhO1xuICAgIC8vIDIg5L+u5pS55YC8XG4gICAgYWxsQ2hlY2tlZCA9ICFhbGxDaGVja2VkO1xuICAgIC8vIDMg5b6q546v5L+u5pS5Y2FydOaVsOe7hCDkuK3nmoTllYblk4HpgInkuK3nirbmgIFcbiAgICBjYXJ0LmZvckVhY2goKHYpID0+ICh2LmNoZWNrZWQgPSBhbGxDaGVja2VkKSk7XG4gICAgLy8gNCDmiorkv67mlLnlkI7nmoTlgLwg5aGr5YWF5ZueZGF0YeaIluiAhee8k+WtmOS4rVxuICAgIHRoaXMuc2V0Q2FydChjYXJ0KTtcbiAgfSxcbiAgLy8g5ZWG5ZOB5pWw6YeP55qE57yW6L6R5Yqf6IO9XG4gIGFzeW5jIGhhbmRsZUl0ZW1OdW1FZGl0KGU6IGFueSkge1xuICAgIC8vIDEg6I635Y+W5Lyg6YCS6L+H5p2l55qE5Y+C5pWwXG4gICAgY29uc3QgeyBvcGVyYXRpb24sIGlkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAvLyAyIOiOt+WPlui0reeJqei9puaVsOe7hFxuICAgIGNvbnN0IHsgY2FydCB9ID0gdGhpcy5kYXRhO1xuICAgIC8vIDMg5om+5Yiw6ZyA6KaB5L+u5pS555qE5ZWG5ZOB55qE57Si5byVXG4gICAgY29uc3QgaW5kZXggPSBjYXJ0LmZpbmRJbmRleCgodjogYW55KSA9PiB2Lmdvb2RzX2lkID09PSBpZCk7XG4gICAgLy8gNCDliKTmlq3mmK/lkKbopoHmiafooYzliKDpmaRcbiAgICBpZiAoY2FydFtpbmRleF0ubnVtID09PSAxICYmIG9wZXJhdGlvbiA9PT0gLTEpIHtcbiAgICAgIC8vIDQuMSDlvLnnqpfmj5DnpLpcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNob3dNb2RhbCh7IGNvbnRlbnQ6IFwi5oKo5piv5ZCm6KaB5Yig6Zmk77yfXCIgfSk7XG4gICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgY2FydC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNldENhcnQoY2FydCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIDQgIOi/m+ihjOS/ruaUueaVsOmHj1xuICAgICAgY2FydFtpbmRleF0ubnVtICs9IG9wZXJhdGlvbjtcbiAgICAgIC8vIDUg6K6+572u5Zue57yT5a2Y5ZKMZGF0YeS4rVxuICAgICAgdGhpcy5zZXRDYXJ0KGNhcnQpO1xuICAgIH1cbiAgfSxcbiAgLy8g54K55Ye7IOe7k+eul1xuICBhc3luYyBoYW5kbGVQYXkoKSB7XG4gICAgLy8gMSDliKTmlq3mlLbotKflnLDlnYBcbiAgICBjb25zdCB7IGFkZHJlc3MsIHRvdGFsTnVtIH0gPSB0aGlzLmRhdGE7XG4gICAgaWYgKCFhZGRyZXNzLnVzZXJOYW1lKSB7XG4gICAgICBhd2FpdCBzaG93VG9hc3QoeyB0aXRsZTogXCLmgqjov5jmsqHmnInpgInmi6nmlLbotKflnLDlnYBcIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gMiDliKTmlq3nlKjmiLfmnInmsqHmnInpgInotK3llYblk4FcbiAgICBpZiAodG90YWxOdW0gPT09IDApIHtcbiAgICAgIGF3YWl0IHNob3dUb2FzdCh7IHRpdGxlOiBcIuaCqOi/mOayoeaciemAiei0reWVhuWTgVwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyAzIOi3s+i9rOWIsCDmlK/ku5jpobXpnaJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogXCIvcGFnZXMvcGF5L2luZGV4XCIsXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==