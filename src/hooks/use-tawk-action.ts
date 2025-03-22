import {
  TawkAPI_addEvent,
  TawkAPI_addTags,
  TawkAPI_endChat,
  TawkAPI_getStatus,
  TawkAPI_getWindowType,
  TawkAPI_hideWidget,
  TawkAPI_isChatHidden,
  TawkAPI_isChatMaximized,
  TawkAPI_isChatMinimized,
  TawkAPI_isChatOngoing,
  TawkAPI_isVisitorEngaged,
  TawkAPI_login,
  TawkAPI_logout,
  TawkAPI_maximize,
  TawkAPI_minimize,
  TawkAPI_popup,
  TawkAPI_removeTags,
  TawkAPI_setAttributes,
  TawkAPI_showWidget,
  TawkAPI_shutdown,
  TawkAPI_start,
  TawkAPI_switchWidget,
  TawkAPI_toggle,
  TawkAPI_toggleVisibility,
} from '../types/tawk'

export type TawkActions = {
  start: TawkAPI_start
  shutdown: TawkAPI_shutdown
  switchWidget: TawkAPI_switchWidget
  login: TawkAPI_login
  logout: TawkAPI_logout
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
}

function useTawkAction(): TawkActions {
  return {
    start: (params) => {
      if (!isActionsAvailable()) return
      window.Tawk_API.start(params)
    },
    shutdown: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.shutdown()
    },
    switchWidget: (data, callback) => {
      if (!isActionsAvailable()) {
        return callback(new Error('Tawk is not ready.'))
      }
      window.Tawk_API.switchWidget(data, callback)
    },
    login: (data, callback) => {
      if (!isActionsAvailable()) {
        return callback(new Error('Tawk is not ready.'))
      }
      window.Tawk_API.login(data, callback)
    },
    logout: (callback) => {
      if (!isActionsAvailable()) {
        return callback(new Error('Tawk is not ready.'))
      }
      window.Tawk_API.logout(callback)
    },
    maximize: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.maximize()
    },
    minimize: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.minimize()
    },
    toggle: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.toggle()
    },
    popup: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.popup()
    },
    getWindowType: () => {
      if (!isActionsAvailable()) return
      return window.Tawk_API.getWindowType()
    },
    showWidget: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.showWidget()
    },
    hideWidget: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.hideWidget()
    },
    toggleVisibility: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.toggleVisibility()
    },
    getStatus: () => {
      if (!isActionsAvailable()) return
      return window.Tawk_API.getStatus()
    },
    isChatMaximized: () => {
      if (!isActionsAvailable()) return
      return window.Tawk_API.isChatMaximized()
    },
    isChatMinimized: () => {
      if (!isActionsAvailable()) return
      return window.Tawk_API.isChatMinimized()
    },
    isChatHidden: () => {
      if (!isActionsAvailable()) return
      return window.Tawk_API.isChatHidden()
    },
    isChatOngoing: () => {
      if (!isActionsAvailable()) return
      return window.Tawk_API.isChatOngoing()
    },
    isVisitorEngaged: () => {
      if (!isActionsAvailable()) return
      return window.Tawk_API.isVisitorEngaged()
    },
    endChat: () => {
      if (!isActionsAvailable()) return
      window.Tawk_API.endChat()
    },
    setAttributes: (attributes, callback) => {
      if (!isActionsAvailable()) {
        return callback(new Error('Tawk is not ready.'))
      }
      window.Tawk_API.setAttributes(attributes, callback)
    },
    addEvent: (eventName, metadata, callback) => {
      if (!isActionsAvailable()) {
        return callback(new Error('Tawk is not ready.'))
      }
      window.Tawk_API.addEvent(eventName, metadata, callback)
    },
    addTags: (tags, callback) => {
      if (!isActionsAvailable()) {
        return callback(new Error('Tawk is not ready.'))
      }
      window.Tawk_API.addTags(tags, callback)
    },
    removeTags: (tags, callback) => {
      if (!isActionsAvailable()) {
        return callback(new Error('Tawk is not ready.'))
      }
      window.Tawk_API.removeTags(tags, callback)
    },
  }
}

function isActionsAvailable() {
  if (typeof window === 'undefined') {
    return false
  }

  return typeof window.Tawk_API !== 'undefined'
}

export { useTawkAction }
