---
title: General
sidebar_label: General
---

## 参数

### CallbackResult

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| errMsg | `string` | 错误信息 |

### SafeAreaResult

在竖屏正方向下的安全区域

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| bottom | `number` | 安全区域右下角纵坐标 |
| height | `number` | 安全区域的高度，单位逻辑像素 |
| left | `number` | 安全区域左上角横坐标 |
| right | `number` | 安全区域右下角横坐标 |
| top | `number` | 安全区域左上角纵坐标 |
| width | `number` | 安全区域的宽度，单位逻辑像素 |

### AdErrCode

错误码

错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。

| 参数 | 异常情况 | 理由 | 解决方案 |
| --- | :---: | :---: | :---: |
| 1000 | `后端接口调用失败` | `该项错误不是开发者的异常情况` | `一般情况下忽略一段时间即可恢复。` |
| 1001 | `参数错误` | `使用方法错误` | `可以前往 developers.weixin.qq.com 确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。` |
| 1002 | `广告单元无效` | `可能是拼写错误、或者误用了其他APP的广告ID` | `请重新前往 mp.weixin.qq.com 确认广告位ID。` |
| 1003 | `内部错误` | `该项错误不是开发者的异常情况` | `一般情况下忽略一段时间即可恢复。` |
| 1004 | `无合适的广告` | `广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告` | `属于正常情况，且开发者需要针对这种情况做形态上的兼容。` |
| 1005 | `广告组件审核中` | `你的广告正在被审核，无法展现广告` | `请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。` |
| 1006 | `广告组件被驳回` | `你的广告审核失败，无法展现广告` | `请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。` |
| 1007 | `广告组件被封禁` | `你的广告能力已经被封禁，封禁期间无法展现广告` | `请前往 mp.weixin.qq.com 确认小程序广告封禁状态。` |
| 1008 | `广告单元已关闭` | `该广告位的广告能力已经被关闭` | `请前往 mp.weixin.qq.com 重新打开对应广告位的展现。` |

### LaunchOptionsApp

启动参数

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| path | `string` | 启动小程序的路径 |
| query | `Record<string, any>` | 启动小程序的 query 参数 |
| referrerInfo | `ReferrerInfo` | 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) |
| scene | `number` | 启动小程序的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) |
| shareTicket | `string` | shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) |
