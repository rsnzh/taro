---
title: Taro.onWifiConnected(callback)
sidebar_label: onWifiConnected
---

监听连接上 Wi-Fi 的事件。

## 类型

```tsx
(callback: Callback) => void
```

## 参数

### Callback

连接上 Wi-Fi 的事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| wifi | `WifiInfo` | Wi-Fi 信息 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.onWifiConnected | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnected.html)
