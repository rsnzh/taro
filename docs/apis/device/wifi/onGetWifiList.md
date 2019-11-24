---
title: Taro.onGetWifiList(callback)
sidebar_label: onGetWifiList
---

监听获取到 Wi-Fi 列表数据事件

## 类型

```tsx
(callback: Callback) => void
```

## 参数

### Callback

获取到 Wi-Fi 列表数据事件的回调函数

```tsx
(result: CallbackResult) => void
```

| 参数 | 类型 |
| --- | --- |
| result | `CallbackResult` |

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| wifiList | `WifiInfo[]` | Wi-Fi 列表数据 |

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.onGetWifiList | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onGetWifiList.html)
