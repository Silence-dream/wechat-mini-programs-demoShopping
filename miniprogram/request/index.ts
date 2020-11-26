export function request(params: any): any {
  return new Promise((resolve: any, reject: any) => {
    wx.request({
      ...params,
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
}
