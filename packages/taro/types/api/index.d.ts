declare namespace Taro {
  namespace General {
    type IAnyObject = Record<string, any>
    type Optional<F> = F extends (arg: infer P) => infer R ? (arg?: P) => R : F
    type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> }
    interface CallbackResult {
      /** 错误信息 */
      errMsg: string
    }

    /** 在竖屏正方向下的安全区域 */
    interface SafeAreaResult {
      /** 安全区域右下角纵坐标 */
      bottom: number
      /** 安全区域的高度，单位逻辑像素 */
      height: number
      /** 安全区域左上角横坐标 */
      left: number
      /** 安全区域右下角横坐标 */
      right: number
      /** 安全区域左上角纵坐标 */
      top: number
      /** 安全区域的宽度，单位逻辑像素 */
      width: number
    }
    /** 
     * 错误码
     * 
     * 错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。
     * 在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
     */
    interface AdErrCode {
      /**
       * @abnormal 后端接口调用失败
       * @reason 该项错误不是开发者的异常情况
       * @solution 一般情况下忽略一段时间即可恢复。
       */
      1000
      /**
       * @abnormal 参数错误
       * @reason 使用方法错误
       * @solution 可以前往 developers.weixin.qq.com 确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。
       */
      1001
      /**
       * @abnormal 广告单元无效
       * @reason 可能是拼写错误、或者误用了其他APP的广告ID
       * @solution 请重新前往 mp.weixin.qq.com 确认广告位ID。
       */
      1002
      /**
       * @abnormal 内部错误
       * @reason 该项错误不是开发者的异常情况
       * @solution 一般情况下忽略一段时间即可恢复。
       */
      1003
      /**
       * @abnormal 无合适的广告
       * @reason 广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告
       * @solution 属于正常情况，且开发者需要针对这种情况做形态上的兼容。
       */
      1004
      /**
       * @abnormal 广告组件审核中
       * @reason 你的广告正在被审核，无法展现广告
       * @solution 请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。
       */
      1005
      /**
       * @abnormal 广告组件被驳回
       * @reason 你的广告审核失败，无法展现广告
       * @solution 请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。
       */
      1006
      /**
       * @abnormal 广告组件被封禁
       * @reason 你的广告能力已经被封禁，封禁期间无法展现广告
       * @solution 请前往 mp.weixin.qq.com 确认小程序广告封禁状态。
       */
      1007
      /**
       * @abnormal 广告单元已关闭
       * @reason 该广告位的广告能力已经被关闭
       * @solution 请前往 mp.weixin.qq.com 重新打开对应广告位的展现。
       */
      1008
      // [key: number]: string
    }

    /** 启动参数 */
    interface LaunchOptionsApp {
      /** 启动小程序的路径 */
      path: string
      /** 启动小程序的 query 参数 */
      query: IAnyObject
      /** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意) */
      referrerInfo: LaunchOptionsApp.ReferrerInfo
      /** 启动小程序的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html) */
      scene: number
      /** shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html) */
      shareTicket: string
    }

    namespace LaunchOptionsApp {
      interface ReferrerInfo {
        /** 来源小程序、公众号或 App 的 appId */
        appId: string
        /** 来源小程序传过来的数据，scene=1037或1038时支持 */
        extraData: IAnyObject
      }
    }
  }
}
