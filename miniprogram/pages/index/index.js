"use strict";
Page({
    data: {
        swiperList: [],
    },
    onLoad: function () {
        var _this = this;
        console.log(1);
        wx.request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
            header: { "content-type": "application/json" },
            method: "GET",
            dataType: "json",
            responseType: "text",
            success: function (result) {
                _this.setData({
                    swiperList: result.data.message,
                });
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLEVBQUU7S0FDZjtJQUNELE1BQU0sRUFBRTtRQUFBLGlCQWNQO1FBYkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsaUVBQWlFO1lBQ3RFLE1BQU0sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUM5QyxNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxVQUFDLE1BQVc7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDaEMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FFRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1BhZ2UgT2JqZWN0XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHN3aXBlckxpc3Q6IFtdLFxyXG4gIH0sXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygxKTtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9hcGktaG11Z28td2ViLml0aGVpbWEubmV0L2FwaS9wdWJsaWMvdjEvaG9tZS9zd2lwZXJkYXRhXCIsXHJcbiAgICAgIGhlYWRlcjogeyBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcInRleHRcIixcclxuICAgICAgc3VjY2VzczogKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHN3aXBlckxpc3Q6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vb3B0aW9ucyhPYmplY3QpXHJcbn0pO1xyXG4iXX0=