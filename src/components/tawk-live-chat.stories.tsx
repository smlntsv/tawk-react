import type { Meta, StoryObj } from '@storybook/react'
import { TawkLiveChat, TawkLiveChatProps } from '../main'

export default {
  title: 'Tawk Live Chat',
  component: TawkLiveChat,
  argTypes: {
    propertyId: {
      description: 'The Property ID of the Tawk Live Chat',
      control: {
        type: 'text',
      },
    },
    widgetId: {
      description: 'The Widget ID of the Tawk Live Chat',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TawkLiveChat>

type Story = StoryObj<typeof TawkLiveChat>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    propertyId: import.meta.env.STORYBOOK_TAWK_TO_PROPERTY_ID,
    widgetId: import.meta.env.STORYBOOK_TAWK_TO_WIDGET_ID,
    customStyle: {
      zIndex: 10,
    },
  },
  render: ({ propertyId, widgetId, customStyle }: TawkLiveChatProps) => {
    return <TawkLiveChat propertyId={propertyId} widgetId={widgetId} customStyle={customStyle} />
  },
}
