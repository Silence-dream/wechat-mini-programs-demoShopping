"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ajaxTimes = 0;
function request(params) {
    const header = Object.assign({}, params.header);
    if (params.url.includes("/my/")) {
        header["Authorization"] = wx.getStorageSync("token");
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixTQUFnQixPQUFPLENBQUMsTUFBVztJQUVqQyxNQUFNLE1BQU0scUJBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDO0lBQ3BDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFFL0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEQ7SUFDRCxTQUFTLEVBQUUsQ0FBQztJQUVaLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUVqQyxNQUFNLE9BQU8sR0FBRyxpREFBaUQsQ0FBQztJQUNsRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBWSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQy9DLEVBQUUsQ0FBQyxPQUFPLG1CQUNMLE1BQU0sSUFDVCxHQUFHLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQ3pCLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNsQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxFQUNELElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsRUFDRCxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2dCQUNaLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixDQUFDLElBQ0QsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTVCRCwwQkE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlkIzml7blj5HpgIHlvILmraXku6PnoIHnmoTmrKHmlbBcclxubGV0IGFqYXhUaW1lcyA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KHBhcmFtczogYW55KTogYW55IHtcclxuICAvLyDliKTmlq0gdXJs5Lit5piv5ZCm5bim5pyJIC9teS8g6K+35rGC55qE5piv56eB5pyJ55qE6Lev5b6EIOW4puS4imhlYWRlciB0b2tlblxyXG4gIGNvbnN0IGhlYWRlciA9IHsgLi4ucGFyYW1zLmhlYWRlciB9O1xyXG4gIGlmIChwYXJhbXMudXJsLmluY2x1ZGVzKFwiL215L1wiKSkge1xyXG4gICAgLy8g5ou85o6laGVhZGVyIOW4puS4inRva2VuXHJcbiAgICBoZWFkZXJbXCJBdXRob3JpemF0aW9uXCJdID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKTtcclxuICB9XHJcbiAgYWpheFRpbWVzKys7XHJcbiAgLy8g6K+35rGC5LmL5YmN55qE5Yqo55S75pWI5p6cXHJcbiAgd3guc2hvd0xvYWRpbmcoeyB0aXRsZTogXCLliqDovb3kuK1cIiB9KTtcclxuICAvLyDlrprkuYnlhazlhbFVUkxcclxuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2FwaS1obXVnby13ZWIuaXRoZWltYS5uZXQvYXBpL3B1YmxpYy92MVwiO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgdXJsOiBiYXNlVXJsICsgcGFyYW1zLnVybCxcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgIGFqYXhUaW1lcy0tO1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG4iXX0=