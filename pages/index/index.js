// index.js
Page({
  data: {
    pages: [
      { name: "01_注册页面", path: "/pages/01_register_page/index" },
      { name: "02_常见组件", path: "/pages/02_common_cpns/index" },
      { name: "03_学习WXSS", path: "/pages/03_learn_wxss/index" },
    ]
  },
  onBtnClick(event) {
    // 1.获取item
    const item = event.target.dataset.item

    // 2.跳转路径
    wx.navigateTo({
      url: item.path,
    })
  }
})
