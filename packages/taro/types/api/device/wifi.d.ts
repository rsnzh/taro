declare namespace Taro {
  namespace stopWifi {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.WifiError) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.WifiError) => void
      /** 接口调用成功的回调函数 */
      success?: (res: General.WifiError) => void
    }
  }
  /** 关闭 Wi-Fi 模块。
   * @supported weapp
   * @example
   * ```tsx
   * Taro.stopWifi({
   *   success: function(res) {
   *     console.log(res.errMsg)
   *   }
   * })
   * ```
   * **errCode列表：**
   *
   * 每个接口调用的时候，都会返回 `errCode` 字段。
   *
   *   错误码   |  说明                      |  备注
   * ----------|---------------------------|------------------------------
   *   0       |  ok                       |  正常
   *   12000   |  not init                 |  未先调用startWifi接口
   *   12001   |  system not support       |  当前系统不支持相关能力
   *   12002   |  password error Wi-Fi     |  Wi-Fi 密码错误
   *   12003   |  connection timeout       |  连接超时
   *   12004   |  duplicate request        |  重复连接 Wi-Fi
   *   12005   |  wifi not turned on        |  Android特有，未打开 Wi-Fi 开关
   *   12006   |  gps not turned on        |  Android特有，未打开 GPS 定位开关
   *   12007   |  user denied              |  用户拒绝授权链接 Wi-Fi
   *   12008   |  invalid SSID             |  无效SSID
   *   12009   |  system config err         |  系统运营商配置拒绝连接 Wi-Fi
   *   12010   |  system internal error    |  系统其他错误，需要在errmsg打印具体的错误原因
   *   12011   |  weapp in background      |  应用在后台无法配置 Wi-Fi
   *   12013   |  wifi config may be expired |  系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.stopWifi.html
   */
  function stopWifi(option?: stopWifi.Option): Promise<General.WifiError>

  namespace startWifi {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.WifiError) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.WifiError) => void
      /** 接口调用成功的回调函数 */
      success?: (res: General.WifiError) => void
    }
  }
  /** 初始化 Wi-Fi 模块。
   * @supported weapp
   * @example
   * ```tsx
   * Taro.startWifi({
   *   success: function(res) {
   *     console.log(res.errMsg)
   *   }
   * })
   * ```
   * **errCode列表：**
   *
   * 每个接口调用的时候，都会返回 `errCode` 字段。
   *
   *   错误码   |  说明                      |  备注
   * ----------|---------------------------|------------------------------
   *   0       |  ok                       |  正常
   *   12000   |  not init                 |  未先调用startWifi接口
   *   12001   |  system not support       |  当前系统不支持相关能力
   *   12002   |  password error Wi-Fi     |  Wi-Fi 密码错误
   *   12003   |  connection timeout       |  连接超时
   *   12004   |  duplicate request        |  重复连接 Wi-Fi
   *   12005   |  wifi not turned on        |  Android特有，未打开 Wi-Fi 开关
   *   12006   |  gps not turned on        |  Android特有，未打开 GPS 定位开关
   *   12007   |  user denied              |  用户拒绝授权链接 Wi-Fi
   *   12008   |  invalid SSID             |  无效SSID
   *   12009   |  system config err         |  系统运营商配置拒绝连接 Wi-Fi
   *   12010   |  system internal error    |  系统其他错误，需要在errmsg打印具体的错误原因
   *   12011   |  weapp in background      |  应用在后台无法配置 Wi-Fi
   *   12013   |  wifi config may be expired |  系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.startWifi.html
   */
  function startWifi(option?: startWifi.Option): Promise<General.WifiError>

  namespace setWifiList {
    interface Option {
      /** 提供预设的 Wi-Fi 信息列表 */
      wifiList: WifiData[]
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.WifiError) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.WifiError) => void
      /** 接口调用成功的回调函数 */
      success?: (res: General.WifiError) => void
    }

    /** 提供预设的 Wi-Fi 信息列表 */
    interface WifiData {
      /** Wi-Fi 的 BSSID */
      BSSID?: string
      /** Wi-Fi 的 SSID */
      SSID?: string
      /** Wi-Fi 设备密码 */
      password?: string
    }
  }
  /** 设置 `wifiList` 中 AP 的相关信息。在 `onGetWifiList` 回调后调用，**iOS特有接口**。
   *
   * **注意**
   * - 该接口只能在 `onGetWifiList` 回调之后才能调用。
   * - 此时客户端会挂起，等待小程序设置 Wi-Fi 信息，请务必尽快调用该接口，若无数据请传入一个空数组。
   * - 有可能随着周边 Wi-Fi 列表的刷新，单个流程内收到多次带有存在重复的 Wi-Fi 列表的回调。
   * @supported weapp
   * @example
   * ```tsx
   * Taro.onGetWifiList(function(res) {
   *   if (res.wifiList.length) {
   *     Taro.setWifiList({
   *       wifiList: [{
   *         SSID: res.wifiList[0].SSID,
   *         BSSID: res.wifiList[0].BSSID,
   *         password: '123456'
   *       }]
   *     })
   *   } else {
   *     Taro.setWifiList({
   *       wifiList: []
   *     })
   *   }
   * })
   * Taro.getWifiList()
   * ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html
   */
  function setWifiList(option: setWifiList.Option): Promise<General.WifiError>

  namespace onWifiConnected {
    /** 连接上 Wi-Fi 的事件的回调函数 */
    type Callback = (
        result: CallbackResult,
    ) => void
    interface CallbackResult {
      /** Wi-Fi 信息 */
      wifi: WifiInfo
    }
  }
  /** 监听连接上 Wi-Fi 的事件。
   * @supported weapp
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnected.html
   */
  function onWifiConnected(
    /** 连接上 Wi-Fi 的事件的回调函数 */
    callback: onWifiConnected.Callback,
  ): void

  namespace onGetWifiList {
    /** 获取到 Wi-Fi 列表数据事件的回调函数 */
    type Callback = (result: CallbackResult) => void
    interface CallbackResult {
      /** Wi-Fi 列表数据 */
      wifiList: WifiInfo[]
    }
  }
  /** 监听获取到 Wi-Fi 列表数据事件
   * @supported weapp
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onGetWifiList.html
   */
  function onGetWifiList(
    /** 获取到 Wi-Fi 列表数据事件的回调函数 */
    callback: onGetWifiList.Callback,
  ): void

  namespace offWifiConnected {
    type Param = () => any
  }

  /**
   * 取消监听连接上 Wi-Fi 的事件。
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offWifiConnected.html
   */
  function offWifiConnected(callback: offWifiConnected.Param): void

  namespace offGetWifiList {
    type Param = () => any
  }
  /**
   * 取消监听获取到 Wi-Fi 列表数据事件。
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offGetWifiList.html
   */
  function offGetWifiList(callback: offGetWifiList.Param): void

  namespace getWifiList {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.WifiError) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.WifiError) => void
      /** 接口调用成功的回调函数 */
      success?: (res: General.WifiError) => void
  }
  }
  /** 请求获取 Wi-Fi 列表。在 `onGetWifiList` 注册的回调中返回 `wifiList` 数据。 **Android 调用前需要 [用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.userLocation。**
   *
   * iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。 iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
   * @supported weapp
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html
   */
  function getWifiList(option?: getWifiList.Option): Promise<General.WifiError>

  namespace getConnectedWifi {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.WifiError) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.WifiError) => void
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void
    }
    interface SuccessCallbackResult extends General.WifiError {
      /** Wi-Fi 信息 */
      wifi: WifiInfo
      /** 调用结果 */
      errMsg: string
    }
  }
  /** 获取已连接中的 Wi-Fi 信息。
   * @supported weapp
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html
   */
  function getConnectedWifi(option?: getConnectedWifi.Option): Promise<General.WifiError>

  namespace connectWifi {
    interface Option {
      /** Wi-Fi 设备 SSID */
      SSID: string
      /** Wi-Fi 设备密码 */
      password: string
      /** Wi-Fi 设备 BSSID */
      BSSID?: string
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.WifiError) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.WifiError) => void
      /** 接口调用成功的回调函数 */
      success?: (res: General.WifiError) => void
    }
    /**
     * 接口调用成功的回调函数 ，res = { errMsg }
     */
    type ParamPropSuccess = (res: { errMsg: string }) => void
    /**
     * 接口调用失败的回调函数
     */
    type ParamPropFail = (err: any) => any
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    type ParamPropComplete = () => any
  }

  /**
   * 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。
   * @example
   * ```tsx
   * Taro.connectWifi({
   *   SSID: '',
   *   BSSID: '',
   *   success: function(res) {
   *     console.log(res.errMsg)
   *   }
   * })
   * ```
   * @supported weapp
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html
   */
  function connectWifi(option: connectWifi.Option): Promise<General.WifiError>

  /** Wifi 信息 */
  interface WifiInfo {
    /** Wi-Fi 的 BSSID */
    BSSID: string
    /** Wi-Fi 的 SSID */
    SSID: string
    /** Wi-Fi 是否安全 */
    secure: boolean
    /** Wi-Fi 信号强度 */
    signalStrength: number
  }
}
