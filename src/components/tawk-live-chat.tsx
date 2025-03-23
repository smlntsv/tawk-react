'use client'

import { FC, useEffect } from 'react'
import { loadScript, removeAllScripts } from '../utils/script-utils'
import { CustomStyle, Visitor } from '../types/tawk'
import { subscribeToTawkWindowEvents } from '../utils/tawk-events'

interface TawkLiveChatProps {
  // Go to https://dashboard.tawk.to -> Administration -> Overview-> Value in Property ID field
  propertyId: string
  // Go to https://dashboard.tawk.to -> Administration -> Channels -> Chat Widget -> Value in Widget ID field
  widgetId: string
  // Object used to set the visitor name and email. Do not place this object in a function, as the values need to be available before the widget script is downloaded.
  // Setting or changing the values after the widget script has been downloaded will not send the values to the dashboard.
  // If the name and email will not be available on load time (eg single page app, ajax login), then use the setAttributes function instead.
  visitor?: Visitor
  // Object used to update the widget styling
  customStyle?: CustomStyle
  // This option allows you to disable the auto start connection of the chat widget.
  autoStart?: boolean
}

const TawkLiveChat: FC<TawkLiveChatProps> = ({
  propertyId,
  widgetId,
  autoStart,
  visitor,
  customStyle,
}) => {
  useEffect(() => {
    const tawkScriptSrc = `https://embed.tawk.to/${propertyId}/${widgetId}`

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_API.autoStart = autoStart
    window.Tawk_API.visitor = visitor
    window.Tawk_API.customStyle = customStyle
    window.Tawk_LoadStart = new Date()

    const unsubscribe = subscribeToTawkWindowEvents()
    loadScript(tawkScriptSrc).catch(console.error)

    return () => {
      removeAllScripts(tawkScriptSrc)
      unsubscribe()
    }
  }, [propertyId, widgetId])

  return null
}

TawkLiveChat.displayName = 'TawkLiveChat'

export type { TawkLiveChatProps }
export { TawkLiveChat }
