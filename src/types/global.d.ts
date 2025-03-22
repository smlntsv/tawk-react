import {
  TawkAPI_start,
  TawkAPI_shutdown,
  TawkAPI_switchWidget,
  TawkAPI_login,
  TawkAPI_logout,
  Visitor,
  TawkAPI_maximize,
  TawkAPI_minimize,
  TawkAPI_toggle,
  TawkAPI_popup,
  TawkAPI_getWindowType,
  TawkAPI_showWidget,
  TawkAPI_hideWidget,
  TawkAPI_toggleVisibility,
  TawkAPI_getStatus,
  TawkAPI_isChatMaximized,
  TawkAPI_isChatMinimized,
  TawkAPI_isChatHidden,
  TawkAPI_isChatOngoing,
  TawkAPI_isVisitorEngaged,
  TawkAPI_endChat,
  TawkAPI_setAttributes,
  TawkAPI_addEvent,
  TawkAPI_addTags,
  TawkAPI_removeTags,
  CustomStyle,
} from './tawk'

declare global {
  interface Window {
    Tawk_API: {
      // https://developer.tawk.to/jsapi/#start
      autoStart?: boolean
      start: TawkAPI_start
      shutdown: TawkAPI_shutdown
      switchWidget: TawkAPI_switchWidget
      login: TawkAPI_login
      logout: TawkAPI_logout
      visitor?: Visitor
      maximize: TawkAPI_maximize
      minimize: TawkAPI_minimize
      toggle: TawkAPI_toggle
      popup: TawkAPI_popup
      getWindowType: TawkAPI_getWindowType
      showWidget: TawkAPI_showWidget
      hideWidget: TawkAPI_hideWidget
      toggleVisibility: TawkAPI_toggleVisibility
      getStatus: TawkAPI_getStatus
      isChatMaximized: TawkAPI_isChatMaximized
      isChatMinimized: TawkAPI_isChatMinimized
      isChatHidden: TawkAPI_isChatHidden
      isChatOngoing: TawkAPI_isChatOngoing
      isVisitorEngaged: TawkAPI_isVisitorEngaged
      endChat: TawkAPI_endChat
      setAttributes: TawkAPI_setAttributes
      addEvent: TawkAPI_addEvent
      addTags: TawkAPI_addTags
      removeTags: TawkAPI_removeTags
      customStyle?: CustomStyle
    }
    Tawk_LoadStart: Date
  }
}
