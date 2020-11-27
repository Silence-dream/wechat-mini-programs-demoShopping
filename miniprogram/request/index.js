"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function request(params) {
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve, reject) => {
        wx.request(Object.assign({}, params, { url: baseUrl + params.url, success: (result) => {
                resolve(result);
            }, fail: (err) => {
                reject(err);
            } }));
    });
}
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQWdCLE9BQU8sQ0FBQyxNQUFXO0lBRWpDLE1BQU0sT0FBTyxHQUFHLGlEQUFpRCxDQUFDO0lBQ2xFLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFZLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDL0MsRUFBRSxDQUFDLE9BQU8sbUJBQ0wsTUFBTSxJQUNULEdBQUcsRUFBRSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFDekIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQixDQUFDLEVBQ0QsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxJQUNELENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFmRCwwQkFlQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KHBhcmFtczogYW55KTogYW55IHtcclxuICAvLyDlrprkuYnlhazlhbFVUkxcclxuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2FwaS1obXVnby13ZWIuaXRoZWltYS5uZXQvYXBpL3B1YmxpYy92MVwiO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgdXJsOiBiYXNlVXJsICsgcGFyYW1zLnVybCxcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIl19