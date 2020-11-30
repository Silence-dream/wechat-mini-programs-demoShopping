// 同时发送异步代码的次数
let ajaxTimes = 0;
export function request(params: any): any {
  // 判断 url中是否带有 /my/ 请求的是私有的路径 带上header token
  const header = { ...params.header };
  if (params.url.includes("/my/")) {
    // 拼接header 带上token
    header["Authorization"] = wx.getStorageSync("token");
  }
  ajaxTimes++;
  // 请求之前的动画效果
  wx.showLoading({ title: "加载中" });
  // 定义公共URL
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
  return new Promise((resolve: any, reject: any) => {
    wx.request({
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        ajaxTimes--;
        wx.hideLoading();
      },
    });
  });
}
