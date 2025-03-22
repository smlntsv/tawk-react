import { describe, expect, it, vi, beforeAll, afterAll } from 'vitest'
import { TawkActions, useTawkAction } from './use-tawk-action'

describe('useTawkAction', () => {
  let tawkApiMock: TawkActions

  beforeAll(() => {
    tawkApiMock = {
      start: vi.fn(),
      shutdown: vi.fn(),
      switchWidget: vi.fn(),
      login: vi.fn(),
      logout: vi.fn(),
      maximize: vi.fn(),
      minimize: vi.fn(),
      toggle: vi.fn(),
      popup: vi.fn(),
      getWindowType: vi.fn(),
      showWidget: vi.fn(),
      hideWidget: vi.fn(),
      toggleVisibility: vi.fn(),
      getStatus: vi.fn(),
      isChatMaximized: vi.fn(),
      isChatMinimized: vi.fn(),
      isChatHidden: vi.fn(),
      isChatOngoing: vi.fn(),
      isVisitorEngaged: vi.fn(),
      endChat: vi.fn(),
      setAttributes: vi.fn(),
      addEvent: vi.fn(),
      addTags: vi.fn(),
      removeTags: vi.fn(),
    }

    globalThis.window.Tawk_API = tawkApiMock
  })

  afterAll(() => vi.clearAllMocks())

  it('should call methods on window.Tawk_API', () => {
    const {
      start,
      shutdown,
      switchWidget,
      login,
      logout,
      maximize,
      minimize,
      toggle,
      popup,
      getWindowType,
      showWidget,
      hideWidget,
      toggleVisibility,
      getStatus,
      isChatMaximized,
      isChatMinimized,
      isChatHidden,
      isChatOngoing,
      isVisitorEngaged,
      endChat,
      setAttributes,
      addEvent,
      addTags,
      removeTags,
    } = useTawkAction()

    const callback = () => {}
    const emptyObj = {}

    start({ showWidget: true })
    shutdown()
    switchWidget({ propertyId: 'propertyId', widgetId: 'widgetId' }, callback)
    login({ hash: 'hash', userId: 'id' }, callback)
    logout(callback)
    maximize()
    minimize()
    toggle()
    popup()
    getWindowType()
    showWidget()
    hideWidget()
    toggleVisibility()
    getStatus()
    isChatMaximized()
    isChatMinimized()
    isChatHidden()
    isChatOngoing()
    isVisitorEngaged()
    endChat()
    setAttributes(emptyObj, callback)
    addEvent('event', emptyObj, callback)
    addTags(['tag'], callback)
    removeTags(['tag'], callback)

    expect(tawkApiMock.start).toHaveBeenCalled()
    expect(tawkApiMock.shutdown).toHaveBeenCalled()
    expect(tawkApiMock.switchWidget).toHaveBeenCalledWith(
      {
        propertyId: 'propertyId',
        widgetId: 'widgetId',
      },
      callback
    )
    expect(tawkApiMock.login).toHaveBeenCalledWith({ hash: 'hash', userId: 'id' }, callback)
    expect(tawkApiMock.logout).toHaveBeenCalledWith(callback)
    expect(tawkApiMock.maximize).toHaveBeenCalled()
    expect(tawkApiMock.minimize).toHaveBeenCalled()
    expect(tawkApiMock.toggle).toHaveBeenCalled()
    expect(tawkApiMock.popup).toHaveBeenCalled()
    expect(tawkApiMock.getWindowType).toHaveBeenCalled()
    expect(tawkApiMock.showWidget).toHaveBeenCalled()
    expect(tawkApiMock.hideWidget).toHaveBeenCalled()
    expect(tawkApiMock.toggleVisibility).toHaveBeenCalled()
    expect(tawkApiMock.getStatus).toHaveBeenCalled()
    expect(tawkApiMock.isChatMaximized).toHaveBeenCalled()
    expect(tawkApiMock.isChatMinimized).toHaveBeenCalled()
    expect(tawkApiMock.isChatHidden).toHaveBeenCalled()
    expect(tawkApiMock.isChatOngoing).toHaveBeenCalled()
    expect(tawkApiMock.isVisitorEngaged).toHaveBeenCalled()
    expect(tawkApiMock.endChat).toHaveBeenCalled()

    expect(tawkApiMock.setAttributes).toHaveBeenCalledWith(emptyObj, callback)
    expect(tawkApiMock.addEvent).toHaveBeenCalledWith('event', emptyObj, callback)
    expect(tawkApiMock.addTags).toHaveBeenCalledWith(['tag'], callback)
    expect(tawkApiMock.removeTags).toHaveBeenCalledWith(['tag'], callback)
  })
})
