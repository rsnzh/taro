---
title: Taro.getConnectedWifi(option)
sidebar_label: getConnectedWifi
id: version-1.3.37-getConnectedWifi
original_id: getConnectedWifi
---

获取已连接中的 Wi-Fi 信息。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html)

## 类型

```tsx
(option?: Option) => Promise<WifiError>
```

## 参数

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: WifiError) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: WifiError) => void` | 否 | 接口调用失败的回调函数 |
| success | `(result: SuccessCallbackResult) => void` | 否 | 接口调用成功的回调函数 |

### SuccessCallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| wifi | `WifiInfo` | Wi-Fi 信息 |
| errMsg | `string` | 调用结果 |

## API 支持度

| API | 微信小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: |
| Taro.getConnectedWifi | ✔️ |  |  |
