import type { CustomStyle } from './tawk'

declare global {
  interface Window {
    Tawk_API: {
      // TODO: check https://developer.tawk.to/jsapi/#start
      customStyle?: CustomStyle
    }
    Tawk_LoadStart: Date
  }
}
