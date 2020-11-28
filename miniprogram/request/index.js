"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ajaxTimes = 0;
function request(params) {
    ajaxTimes++;
    wx.showLoading({ title: "加载中" });
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve, reject) => {
        wx.request(Object.assign({}, params, { url: baseUrl + params.url, success: (result) => {
                resolve(result);
            }, fail: (err) => {
                reject(err);
            }, complete: () => {
                ajaxTimes--;
                wx.hideLoading();
            } }));
    });
}
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixTQUFnQixPQUFPLENBQUMsTUFBVztJQUNqQyxTQUFTLEVBQUUsQ0FBQztJQUVaLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUVqQyxNQUFNLE9BQU8sR0FBRyxpREFBaUQsQ0FBQztJQUNsRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBWSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQy9DLEVBQUUsQ0FBQyxPQUFPLG1CQUNMLE1BQU0sSUFDVCxHQUFHLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQ3pCLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNsQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxFQUNELElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsRUFDRCxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixDQUFDLElBQ0QsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQXRCRCwwQkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlkIzml7blj5HpgIHlvILmraXku6PnoIHnmoTmrKHmlbBcclxubGV0IGFqYXhUaW1lcyA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KHBhcmFtczogYW55KTogYW55IHtcclxuICBhamF4VGltZXMrKztcclxuICAvLyDor7fmsYLkuYvliY3nmoTliqjnlLvmlYjmnpxcclxuICB3eC5zaG93TG9hZGluZyh7IHRpdGxlOiBcIuWKoOi9veS4rVwiIH0pO1xyXG4gIC8vIOWumuS5ieWFrOWFsVVSTFxyXG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLWhtdWdvLXdlYi5pdGhlaW1hLm5ldC9hcGkvcHVibGljL3YxXCI7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICB1cmw6IGJhc2VVcmwgKyBwYXJhbXMudXJsLFxyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgYWpheFRpbWVzLS07XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiJdfQ==