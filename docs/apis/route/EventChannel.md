---
title: EventChannel
sidebar_label: EventChannel
---

## 方法

### emit

触发一个事件

```tsx
(eventName: string, ...args: any) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| args | `any` | 事件参数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.emit.html)

### off

取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数

```tsx
(eventName: string, fn: EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `EventCallback` | 事件监听函数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.off.html)

### on

持续监听一个事件

```tsx
(eventName: string, fn: EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `EventCallback` | 事件监听函数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.on.html)

### once

监听一个事件一次，触发后失效

```tsx
(eventName: string, fn: EventCallback) => void
```

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| eventName | `string` | 事件名称 |
| fn | `EventCallback` | 事件监听函数 |

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.once.html)

## API 支持度

| API | 微信小程序 | 百度小程序 | 支付宝小程序 | 字节跳动小程序 | QQ 小程序 | H5 | React Native | 快应用 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| EventChannel.emit | ✔️ |  |  |  |  |  |  |  |
| EventChannel.off | ✔️ |  |  |  |  |  |  |  |
| EventChannel.on | ✔️ |  |  |  |  |  |  |  |
| EventChannel.once | ✔️ |  |  |  |  |  |  |  |
