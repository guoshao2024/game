// 这是一个极简的 Service Worker，它什么都不做，但它的存在是PWA的关键
// 它会确保应用被正确地识别和安装
self.addEventListener('fetch', () => {
  // 暂时不需要离线缓存逻辑，让浏览器正常请求网络
});