---
title: Taro.onUserCaptureScreen(callback)
sidebar_label: onUserCaptureScreen
---

监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件

## 类型

```tsx
(callback: (res: CallbackResult) => void) => void
```

## 参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | `(res: CallbackResult) => void` | 用户主动截屏事件的回调函数 |

## 示例代码

```tsx
Taro.onUserCaptureScreen(function(res) {
    console.log('用户截屏了')
})
```

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Taro.onUserCaptureScreen | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html)
