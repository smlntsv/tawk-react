import type { TawkEventMap } from '../types/tawk'
import { TawkEvent } from '../types/tawk'

const subscriptions = new Map<keyof TawkEventMap, TawkEventMap[keyof TawkEventMap][]>()

function subscribeToTawkWindowEvents(): () => void {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const handleEvent = (event: Event): void => {
    const customEvent = event as CustomEvent
    const eventName = customEvent.type as keyof TawkEventMap
    const eventData = customEvent.detail as Parameters<TawkEventMap[typeof eventName]>

    const listeners = subscriptions.get(eventName) ?? []
    for (const listener of listeners) {
      ;(listener as (data: typeof eventData) => void)(eventData)
    }
  }

  for (const eventName of Object.values(TawkEvent)) {
    window.addEventListener(eventName, handleEvent)
  }

  return () => {
    for (const eventName of Object.values(TawkEvent)) {
      window.removeEventListener(eventName, handleEvent)
    }
  }
}

function subscribeToTawkEvent<T extends keyof TawkEventMap>(
  eventName: T,
  callback: TawkEventMap[T]
): () => void {
  const listeners = subscriptions.get(eventName) ?? []
  listeners.push(callback)
  subscriptions.set(eventName, listeners)

  return () => {
    const listeners = subscriptions.get(eventName) ?? []
    const updatedListeners = listeners.filter((cb) => cb !== callback)
    subscriptions.set(eventName, updatedListeners)
  }
}

export { subscribeToTawkWindowEvents, subscribeToTawkEvent }
