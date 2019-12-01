---
title: Taro.setStorageSync(key, data)
sidebar_label: setStorageSync
---

Taro.setStorage 的同步版本

## 类型

```tsx
(key: string, data: any) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | 本地缓存中指定的 key |
| data | `any` | 需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。 |

## 示例代码

```tsx
Taro.setStorage({
  key:"key",
  data:"value"
})
```
```tsx
try {
  Taro.setStorageSync('key', 'value')
} catch (e) { }
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.setStorageSync | ✔️ |  |  |  |  | ✔️ |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)
