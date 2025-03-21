import { useEffect } from 'react'
import { subscribeToTawkEvent } from '../utils/tawk-events'
import type { TawkEventMap } from '../types/tawk'

function useTawkEvent<T extends keyof TawkEventMap>(eventName: T, callback: TawkEventMap[T]): void {
  useEffect(() => subscribeToTawkEvent(eventName, callback), [eventName, callback])
}

export { useTawkEvent }
