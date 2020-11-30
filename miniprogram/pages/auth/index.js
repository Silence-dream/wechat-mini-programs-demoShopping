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
const asyncWX_1 = require("../../utils/asyncWX");
Page({
    handleGetUserInfo(e) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { encryptedData, rawData, iv, signature } = e.detail;
                const { code } = yield asyncWX_1.login();
                const loginParams = { encryptedData, rawData, iv, signature, code };
                const { token } = yield index_1.request({
                    url: "/users/wxlogin",
                    data: loginParams,
                    method: "post",
                });
                wx.setStorageSync("token", token);
                wx.navigateBack({
                    delta: 1,
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLGlEQUE0QztBQUU1QyxJQUFJLENBQUM7SUFFRyxpQkFBaUIsQ0FBQyxDQUFNOztZQUM1QixJQUFJO2dCQUVGLE1BQU0sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUUzRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxlQUFLLEVBQUUsQ0FBQztnQkFDL0IsTUFBTSxXQUFXLEdBQUcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBRXBFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLGVBQU8sQ0FBQztvQkFDOUIsR0FBRyxFQUFFLGdCQUFnQjtvQkFDckIsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUMsQ0FBQztnQkFFSCxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFLLEVBQUUsQ0FBQztpQkFDVCxDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEI7UUFDSCxDQUFDO0tBQUE7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlcXVlc3QvaW5kZXhcIjtcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FzeW5jV1hcIjtcblxuUGFnZSh7XG4gIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICBhc3luYyBoYW5kbGVHZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gMSDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgIGNvbnN0IHsgZW5jcnlwdGVkRGF0YSwgcmF3RGF0YSwgaXYsIHNpZ25hdHVyZSB9ID0gZS5kZXRhaWw7XG4gICAgICAvLyAyIOiOt+WPluWwj+eoi+W6j+eZu+W9leaIkOWKn+WQjueahGNvZGVcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgbG9naW4oKTtcbiAgICAgIGNvbnN0IGxvZ2luUGFyYW1zID0geyBlbmNyeXB0ZWREYXRhLCByYXdEYXRhLCBpdiwgc2lnbmF0dXJlLCBjb2RlIH07XG4gICAgICAvLyAgMyDlj5HpgIHor7fmsYIg6I635Y+W55So5oi355qEdG9rZW5cbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGF3YWl0IHJlcXVlc3Qoe1xuICAgICAgICB1cmw6IFwiL3VzZXJzL3d4bG9naW5cIixcbiAgICAgICAgZGF0YTogbG9naW5QYXJhbXMsXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICB9KTtcbiAgICAgIC8vIDQg5oqKdG9rZW7lrZjlhaXnvJPlrZjkuK0g5ZCM5pe26Lez6L2s5Zue5LiK5LiA5Liq6aG16Z2iXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInRva2VuXCIsIHRva2VuKTtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgIGRlbHRhOiAxLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==