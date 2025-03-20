import { FC, useEffect } from 'react'
import { loadScript, removeAllScripts } from '../utils/script-utils'
import { CustomStyle } from '../types/tawk'

interface TawkLiveChatProps {
  // Go to https://dashboard.tawk.to -> Administration -> Overview-> Value in Property ID field
  propertyId: string
  // Go to https://dashboard.tawk.to -> Administration -> Channels -> Chat Widget -> Value in Widget ID field
  widgetId: string
  // Object used to update the widget styling
  customStyle?: CustomStyle
}

const TawkLiveChat: FC<TawkLiveChatProps> = ({ propertyId, widgetId, customStyle }) => {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_API.customStyle = customStyle
    window.Tawk_LoadStart = new Date()

    const tawkScriptSrc = `https://embed.tawk.to/${propertyId}/${widgetId}`
    loadScript(tawkScriptSrc).catch(console.error)

    return () => removeAllScripts(tawkScriptSrc)
  }, [propertyId, widgetId])

  return null
}

export { TawkLiveChat }
