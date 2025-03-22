// @vitest-environment happy-dom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { subscribeToTawkEvent, subscribeToTawkWindowEvents } from './tawk-events'
import { TawkEvent } from '../types/tawk'

describe('tawk-events', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should an empty function when window is not defined', () => {
    const originalWindow = globalThis.window
    // @ts-expect-error - Remove window for this test
    delete globalThis.window

    const unsubscribe = subscribeToTawkWindowEvents()
    expect(typeof unsubscribe).toBe('function')
    expect(unsubscribe()).toBeUndefined()

    // Restore window
    globalThis.window = originalWindow
  })

  it('should register event listeners on window', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')

    const unsubscribe = subscribeToTawkWindowEvents()

    expect(addEventListenerSpy).toHaveBeenCalledTimes(Object.values(TawkEvent).length)
    Object.values(TawkEvent).forEach((eventName) => {
      expect(addEventListenerSpy).toHaveBeenCalledWith(eventName, expect.any(Function))
    })

    unsubscribe()
  })

  it('should remove event listeners when unsubscribed', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const unsubscribe = subscribeToTawkWindowEvents()
    unsubscribe()

    expect(removeEventListenerSpy).toBeCalledTimes(Object.values(TawkEvent).length)
    Object.values(TawkEvent).forEach((eventName) => {
      expect(removeEventListenerSpy).toHaveBeenCalledWith(eventName, expect.any(Function))
    })
  })

  it('should subscribe to tawk event and call subscribed callback when event is dispatched', () => {
    const callback = vi.fn()
    const unsubscribe = subscribeToTawkWindowEvents()
    subscribeToTawkEvent(TawkEvent.onLoad, callback)

    const eventData = null
    const event = new CustomEvent(TawkEvent.onLoad, { detail: eventData })

    window.dispatchEvent(event)

    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith(eventData)

    unsubscribe()
  })

  it('should unsubscribe from tawk event', () => {
    const unsubscribeFromWindowEvents = subscribeToTawkWindowEvents()
    const tawkEventCallback = vi.fn()
    const unsubscribeFromTawkEvent = subscribeToTawkEvent(TawkEvent.onLoad, tawkEventCallback)
    unsubscribeFromTawkEvent()
    const event = new CustomEvent(TawkEvent.onLoad, { detail: null })

    window.dispatchEvent(event)

    expect(tawkEventCallback).not.toHaveBeenCalled()

    unsubscribeFromWindowEvents()
  })
})
