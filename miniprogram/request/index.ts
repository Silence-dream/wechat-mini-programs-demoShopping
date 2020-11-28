// 同时发送异步代码的次数
let ajaxTimes = 0;
export function request(params: any): any {
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
