import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { TawkLiveChat, TawkLiveChatProps } from './tawk-live-chat'
import { loadScript, removeAllScripts } from '../utils/script-utils'
import { subscribeToTawkWindowEvents } from '../utils/tawk-events'
import { Mock } from '@storybook/test'

vi.mock('../utils/script-utils', () => ({
  loadScript: vi.fn(() => Promise.resolve(new Event('load'))),
  removeAllScripts: vi.fn(),
}))

vi.mock('../utils/tawk-events', () => ({
  subscribeToTawkWindowEvents: vi.fn(),
}))

describe('tawk-live-chat', () => {
  const props = {
    propertyId: 'property-id',
    widgetId: 'widget-id',
    autoStart: true,
    visitor: {
      name: 'Name',
      email: 'email@example.com',
    },
    customStyle: {
      zIndex: 9999,
    },
  } satisfies TawkLiveChatProps

  it('should initialize Tawk API and load the script', () => {
    render(<TawkLiveChat {...props} />)

    expect(window.Tawk_API).toBeDefined()
    expect(window.Tawk_API.autoStart).toBe(true)
    expect(window.Tawk_API.visitor).toEqual(props.visitor)
    expect(window.Tawk_API.customStyle).toEqual(props.customStyle)

    expect(loadScript).toHaveBeenCalledWith(
      `https://embed.tawk.to/${props.propertyId}/${props.widgetId}`
    )

    expect(subscribeToTawkWindowEvents).toHaveBeenCalled()
  })

  it('should clean up on unmount', () => {
    const mockSubscribe = subscribeToTawkWindowEvents as Mock
    const mockUnsubscribe = vi.fn()

    mockSubscribe.mockReturnValue(mockUnsubscribe)

    const { unmount } = render(<TawkLiveChat {...props} />)

    unmount()

    expect(removeAllScripts).toHaveBeenCalledWith(
      `https://embed.tawk.to/${props.propertyId}/${props.widgetId}`
    )

    expect(mockUnsubscribe).toHaveBeenCalled()
  })
})
