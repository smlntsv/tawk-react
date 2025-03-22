# React Wrapper for Tawk.to Live Chat

A React component library for integrating Tawk.to live chat into your React applications. This library provides a simple and flexible way to add Tawk.to chat functionality using React components and hooks.

## Features

- Supports React 19.
- Built with TypeScript.
- Comprehensive API for controlling the chat widget.
- Event subscription system for handling Tawk.to events.

## Installation

You can install the package via npm:

```bash
npm install tawk-react
```

## Usage

### Basic Setup

To use the `TawkLiveChat` component, you need to provide your Tawk.to `propertyId` and `widgetId`:
- **`propertyId`**: Go to [Tawk.to Dashboard](https://dashboard.tawk.to) -> Administration -> Overview -> Value in `Property ID` field.
- **`widgetId`**: Go to [Tawk.to Dashboard](https://dashboard.tawk.to) -> Administration -> Channels -> Chat Widget -> Value in `Widget ID` field.

```tsx
import { TawkLiveChat } from 'tawk-react'

const App = () => {
  return (
    <div>
      <h1>Tawk.to Integration Example</h1>
      <TawkLiveChat propertyId="your-property-id" widgetId="your-widget-id" />
    </div>
  )
}

export default App
```

### Using Hooks

The library also provides hooks for interacting with the Tawk.to API as well as for listening Tawk.to events.

#### useTawkAction

This hook provides methods to control the chat widget programmatically. You can use it from any component in your codebase.

```tsx
import { useTawkAction } from 'tawk-react'

const ChatControls = () => {
  const { maximize, minimize, endChat } = useTawkAction()

  return (
    <div>
      <button onClick={maximize}>Maximize Chat</button>
      <button onClick={minimize}>Minimize Chat</button>
      <button onClick={endChat}>End Chat</button>
    </div>
  )
}

export default ChatControls
```

### Event Subscription

You can subscribe to Tawk.to events using the `useTawkEvent` hook.

```tsx
import { useTawkEvent, TawkEvent } from 'tawk-react'

const ChatEventListener = () => {
  useTawkEvent(TawkEvent.onLoad, () => {
    console.log('Chat loaded')
  })

  return null
}

export default ChatEventListener
```

## API Reference

### TawkLiveChat Props

- **`propertyId`** (string): Your Tawk.to Property ID.
- **`widgetId`** (string): Your Tawk.to Widget ID.
- **`visitor`** (optional): Object containing visitor information (`name`, `email`).
- **`customStyle`** (optional): Object to customize widget styling. Only `zIndex` is supported.
- **`autoStart`** (optional): Boolean to disable the auto-start connection of the chat widget.

### Hooks

#### useTawkAction

Provides methods like `start`, `shutdown`, `maximize`, `minimize`, `toggle`, etc., to control the chat widget.

#### useTawkEvent

Allows subscribing to various Tawk.to events such as `onLoad`, `onChatStarted`, `onChatEnded`, etc.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

- [Tawk.to](https://www.tawk.to/) for providing the live chat service.
