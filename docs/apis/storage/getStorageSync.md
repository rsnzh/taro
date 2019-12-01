---
title: Taro.getStorageSync(key)
sidebar_label: getStorageSync
---

Taro.getStorage 的同步版本

## 类型

```tsx
(key: string) => any
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | 本地缓存中指定的 key |

## 示例代码

```tsx
Taro.getStorage({
  key: 'key',
  success (res) {
    console.log(res.data)
  }
})
```

```tsx
try {
  var value = Taro.getStorageSync('key')
  if (value) {
    // Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.getStorageSync | ✔️ |  |  |  |  | ✔️ |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html)
