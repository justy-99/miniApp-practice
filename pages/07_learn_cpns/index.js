// pages/07_learn_cpns/index.js
Page({
  data: {
    digitalTitles: ['电脑', '手机', 'iPad']
  },
  onSectionTitleClick(event) {
    console.log("区域title发生了点击", event.detail);
  },
  onTabIndexChange(event) {
    const index = event.detail
    console.log("点击了", this.data.digitalTitles[index]);
  }
})