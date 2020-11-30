import { chooseAddress, showModal, showToast } from "../../utils/asyncWX";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0,
  },
  onShow() {
    // 页面显示获取本地存储里面的数据给address
    const address = wx.getStorageSync("address") || {};
    // 获取用户的添加的购物车
    const cart = wx.getStorageSync("cart") || [];
    // 全选按钮的选择状态
    let allChecked: boolean = cart.length;
    //   ? cart.every((item: any) => item.checked)
    //   : false;
    // 1 总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach((v: any) => {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      } else {
        allChecked = false;
      }
    });
    // 判断数组是否为空
    allChecked = cart.length !== 0 ? allChecked : false;
    console.log(address);
    // 保存到data里面
    this.setData({
      address,
      cart,
      allChecked,
      totalPrice,
      totalNum,
    });
  },
  // 获取用户收获地址
  async handleChooseAddress() {
    //   https://developers.weixin.qq.com/community/develop/doc/000c0a0a590490590d0ba0c3d51801
    // 新版本已经不需要授权就可以直接拿到用户的收货地址了
    try {
      // 获取用户收货地址
      const address: any = await chooseAddress();
      address.all =
        address.provinceName +
        address.cityName +
        address.countyName +
        address.detailInfo;
      // 保存到本地存储里面
      wx.setStorageSync("address", address);
    } catch (error) {
      console.log(error);
    }
  },

  // 商品的选中
  handeItemChange(e: any) {
    // 1 获取被修改的商品的id
    const goods_id = e.currentTarget.dataset.id;
    // 2 获取购物车数组
    const { cart } = this.data;
    // 3 找到被修改的商品对象
    const index = cart.findIndex((v) => v.goods_id === goods_id);
    // 4 选中状态取反
    cart[index].checked = !cart[index].checked;

    this.setCart(cart);
  },
  // 设置购物车状态同时 重新计算 底部工具栏的数据 全选 总价格 购买的数量
  setCart(cart: any) {
    let allChecked = true;
    // 1 总价格 总数量
    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach((v: any) => {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      } else {
        allChecked = false;
      }
    });
    // 判断数组是否为空
    allChecked = cart.length !== 0 ? allChecked : false;
    this.setData({
      cart,
      totalPrice,
      totalNum,
      allChecked,
    });
    wx.setStorageSync("cart", cart);
  },
  // 商品全选功能
  handleItemAllCheck() {
    // 1 获取data中的数据
    let { cart, allChecked } = this.data;
    // 2 修改值
    allChecked = !allChecked;
    // 3 循环修改cart数组 中的商品选中状态
    cart.forEach((v) => (v.checked = allChecked));
    // 4 把修改后的值 填充回data或者缓存中
    this.setCart(cart);
  },
  // 商品数量的编辑功能
  async handleItemNumEdit(e: any) {
    // 1 获取传递过来的参数
    const { operation, id } = e.currentTarget.dataset;
    // 2 获取购物车数组
    const { cart } = this.data;
    // 3 找到需要修改的商品的索引
    const index = cart.findIndex((v: any) => v.goods_id === id);
    // 4 判断是否要执行删除
    if (cart[index].num === 1 && operation === -1) {
      // 4.1 弹窗提示
      const res = await showModal({ content: "您是否要删除？" });
      if (res.confirm) {
        cart.splice(index, 1);
        this.setCart(cart);
      }
    } else {
      // 4  进行修改数量
      cart[index].num += operation;
      // 5 设置回缓存和data中
      this.setCart(cart);
    }
  },
  // 点击 结算
  async handlePay() {
    // 1 判断收货地址
    const { address, totalNum } = this.data;
    if (!address.userName) {
      await showToast({ title: "您还没有选择收货地址" });
      return;
    }
    // 2 判断用户有没有选购商品
    if (totalNum === 0) {
      await showToast({ title: "您还没有选购商品" });
      return;
    }
    // 3 跳转到 支付页面
    wx.navigateTo({
      url: "/pages/pay/index",
    });
  },
});
