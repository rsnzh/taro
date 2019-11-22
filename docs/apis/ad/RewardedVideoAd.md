---
title: RewardedVideoAd
sidebar_label: RewardedVideoAd
---

激励视频广告组件。激励视频广告组件是一个原生组件，层级比普通组件高。激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用），默认是隐藏的，需要调用 RewardedVideoAd.show() 将其显示。

## 方法

| Name | Type | Description |
| --- | --- | --- |
| load | `() => Promise<any>` | 加载激励视频广告。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.load.html) |
| show | `() => Promise<any>` | 显示激励视频广告。激励视频广告将从屏幕下方推入。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.show.html) |
| destroy | `() => void` | 销毁激励视频广告实例。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.destroy.html) |
| offClose | `(callback: OffCloseCallback) => void` | 取消监听用户点击 `关闭广告` 按钮的事件<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offClose.html) |
| offError | `(callback: OffErrorCallback) => void` | 取消监听激励视频错误事件<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offError.html) |
| offLoad | `(callback: OffLoadCallback) => void` | 取消监听激励视频广告加载事件<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offLoad.html) |
| onClose | `(callback: OnCloseCallback) => void` | 监听用户点击 `关闭广告` 按钮的事件。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onClose.html) |
| onError | `(callback: OnErrorCallback) => void` | 监听激励视频错误事件。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onError.html) |
| onLoad | `(callback: OnLoadCallback) => void` | 监听激励视频广告加载事件。<br />[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onLoad.html) |

## 参数

### OnErrorCallbackResult

| Name | Type | Description |
| --- | --- | --- |
| errCode | `1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008` | 错误码<br />[参考地址](https://nervjs.github.io/taro/docs/apis/General#AdErrCode) |
| errMsg | `string` | 错误信息 |

### OnCloseCallbackResult

| Name | Type | Description |
| --- | --- | --- |
| isEnded | `boolean` | 视频是否是在用户完整观看的情况下被关闭的 |

### OffCloseCallback

用户点击 `关闭广告` 按钮的事件的回调函数

```tsx
(res: CallbackResult) => void
```

### OffErrorCallback

激励视频错误事件的回调函数

```tsx
(res: CallbackResult) => void
```

### OffLoadCallback

激励视频广告加载事件的回调函数

```tsx
(res: CallbackResult) => void
```

### OnCloseCallback

用户点击 `关闭广告` 按钮的事件的回调函数

```tsx
(result: OnCloseCallbackResult) => void
```

### OnErrorCallback

激励视频错误事件的回调函数

```tsx
(result: OnErrorCallbackResult) => void
```

### OnLoadCallback

激励视频广告加载事件的回调函数

```tsx
(res: CallbackResult) => void
```


## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| load | ✔️ |  |  |  |  |  |  |  |
| show | ✔️ |  |  |  |  |  |  |  |
| destroy | ✔️ |  |  |  |  |  |  |  |
| offClose | ✔️ |  |  |  |  |  |  |  |
| offError | ✔️ |  |  |  |  |  |  |  |
| offLoad | ✔️ |  |  |  |  |  |  |  |
| onClose | ✔️ |  |  |  |  |  |  |  |
| onError | ✔️ |  |  |  |  |  |  |  |
| onLoad | ✔️ |  |  |  |  |  |  |  |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.html)
