---
title: Taro.clearStorageSync()
sidebar_label: clearStorageSync
---

Taro.clearStorage 的同步版本

## 类型

```tsx
() => void
```

## 参数

## 示例代码

```tsx
Taro.clearStorage()
```

```tsx
try {
  Taro.clearStorageSync()
} catch(e) {
// Do something when catch error
}
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.clearStorageSync | ✔️ |  |  |  |  | ✔️ |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html)
