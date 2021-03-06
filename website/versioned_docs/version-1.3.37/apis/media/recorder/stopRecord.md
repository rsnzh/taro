---
title: Taro.stopRecord(option)
sidebar_label: stopRecord
id: version-1.3.37-stopRecord
original_id: stopRecord
---

停止录音。

> [参考文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html)

## 类型

```tsx
(option?: Option) => void
```

## 参数

### Option

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | :---: | --- |
| complete | `(res: CallbackResult) => void` | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |
| fail | `(res: CallbackResult) => void` | 否 | 接口调用失败的回调函数 |
| success | `(res: CallbackResult) => void` | 否 | 接口调用成功的回调函数 |

## 示例代码

```tsx
Taro.startRecord({
  success: function (res) {
    var tempFilePath = res.tempFilePath
  },
  fail: function (res) {
     //录音失败
  }
})
setTimeout(function() {
  //结束录音
  Taro.stopRecord()
}, 10000)
```

## API 支持度

| API | 微信小程序 | H5 | React Native |
| :---: | :---: | :---: | :---: |
| Taro.stopRecord | ✔️ |  |  |
