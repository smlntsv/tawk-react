export type ChatWindowType = 'inline' | 'embed'

export type BasicCallback = (error: Error) => void

export type Status = 'online' | 'away' | 'offline'

export type PreChatData = Record<string, unknown>

export type OfflineFormData = {
  email: string
  name: string
  questions: {
    label: string
    answer: string
  }[]
  submittedFrom: string
}

export type FileAttachment = {
  file: {
    url: string
    name: string
    mimeType: string
    size: number
    extension: string
  }
}

export type Attachment = {
  type: 'file'
  content: FileAttachment
}

export type Message = {
  message: string
  attachments: Attachment[]
}

export type AgentData = {
  id: string
  image: string
  name: string
  position: string
}

export enum Satisfaction {
  Dislike = -1,
  Neutral = 0,
  Link = 1,
}

export type Link = string

export type TagsData = {
  tags: string[]
  tagsv: number
}

export enum TawkEvent {
  onLoad = 'tawkLoad',
  // Invoked when the page status changes.
  onStatusChange = 'tawkStatusChange',
  // Invoked right when Tawk_API is ready to be used and before the widget is rendered.
  onBeforeLoad = 'tawkBeforeLoad',
  // Invoked when the widget is maximized.
  onChatMaximized = 'tawkChatMaximized',
  // Invoked when the widget is minimized.
  onChatMinimized = 'tawkChatMinimized',
  // Invoked when the widget is hidden.
  onChatHidden = 'tawkChatHidden',
  // Invoked when the widget is started.
  onChatStarted = 'tawkChatStarted',
  // Invoked when the widget is ended.
  onChatEnded = 'tawkChatEnded',
  // Invoked when the Pre-Chat Form is submitted. The submitted form data is passed to the function.
  onPrechatSubmit = 'tawkPrechatSubmit',
  // Invoked when the Offline form is submitted. The submitted form data is passed to the callback.
  onOfflineSubmit = 'tawkOfflineSubmit',
  // Invoked when message is sent by the visitor. The message is passed to the callback.
  onChatMessageVisitor = 'tawkChatMessageVisitor',
  // Invoked when message is sent by the agent. The message is passed to the callback.
  onChatMessageAgent = 'tawkChatMessageAgent',
  // Invoked when message is sent by the system. The message is passed to the callback.
  onChatMessageSystem = 'tawkChatMessageSystem',
  // Invoked when an agent joins the chat. The data is passed to the callback.
  onAgentJoinChat = 'tawkAgentJoinChat',
  // Invoked when an agent leaves the chat. The data is passed to the callback.
  onAgentLeaveChat = 'tawkAgentLeaveChat',
  // Invoked when an agent leaves the chat. The satisfaction is passed to the callback.
  onChatSatisfaction = 'tawkChatSatisfaction',
  // Invoked when the visitor manually changes his name. The visitorName is passed to the callback.
  onVisitorNameChanged = 'tawkVisitorNameChanged',
  // Invoked when a file is uploaded. The link to the uploaded file is passed to the callback.
  onFileUpload = 'tawkFileUpload',
  // Invoked when a tag is updated.
  onTagsUpdated = 'tawkTagsUpdated',
}

export type TawkEventMap = {
  [TawkEvent.onLoad]: () => void
  [TawkEvent.onStatusChange]: (status: Status) => void
  [TawkEvent.onBeforeLoad]: () => void
  [TawkEvent.onChatMaximized]: () => void
  [TawkEvent.onChatMinimized]: () => void
  [TawkEvent.onChatHidden]: () => void
  [TawkEvent.onChatStarted]: () => void
  [TawkEvent.onChatEnded]: () => void
  [TawkEvent.onPrechatSubmit]: (data: PreChatData) => void
  [TawkEvent.onOfflineSubmit]: (data: OfflineFormData) => void
  [TawkEvent.onChatMessageVisitor]: (message: Message) => void
  [TawkEvent.onChatMessageAgent]: (messageEvent: Message) => void
  [TawkEvent.onChatMessageSystem]: (messageEvent: Message) => void
  [TawkEvent.onAgentJoinChat]: (agentData: AgentData) => void
  [TawkEvent.onAgentLeaveChat]: (agentLeaveData: AgentData) => void
  [TawkEvent.onChatSatisfaction]: (satisfaction: Satisfaction) => void
  [TawkEvent.onVisitorNameChanged]: (visitorName: string) => void
  [TawkEvent.onFileUpload]: (link: Link) => void
  [TawkEvent.onTagsUpdated]: (data: TagsData) => void
}

// For global declaration
export type TawkAPI_start = ({ showWidget }?: { showWidget: boolean }) => void
export type TawkAPI_shutdown = () => void
export type TawkAPI_switchWidget = (
  { propertyId, widgetId }: { propertyId: string; widgetId: string },
  callback: BasicCallback
) => void
export type LoginData = {
  hash: string
  userId: string
  name?: string
  email?: string
  phone?: string
}
export type TawkAPI_login = (data: LoginData, callback: BasicCallback) => void
export type TawkAPI_logout = (callback: BasicCallback) => void
export type Visitor = {
  name: string
  email: string
}
export type TawkAPI_maximize = () => void
export type TawkAPI_minimize = () => void
export type TawkAPI_toggle = () => void
export type TawkAPI_popup = () => void
export type TawkAPI_getWindowType = () => ChatWindowType | undefined
export type TawkAPI_showWidget = () => void
export type TawkAPI_hideWidget = () => void
export type TawkAPI_toggleVisibility = () => void
export type TawkAPI_getStatus = () => Status | undefined
export type TawkAPI_isChatMaximized = () => boolean | undefined
export type TawkAPI_isChatMinimized = () => boolean | undefined
export type TawkAPI_isChatHidden = () => boolean | undefined
export type TawkAPI_isChatOngoing = () => boolean | undefined
export type TawkAPI_isVisitorEngaged = () => boolean | undefined
export type TawkAPI_endChat = () => void
export type TawkAPI_setAttribute = (
  attributes: Record<string, string>,
  callback: BasicCallback
) => void
export type TawkAPI_addEvent = (
  eventName: string,
  metadata: Record<string, string> | undefined,
  callback: BasicCallback
) => void
export type TawkAPI_addTags = (tags: string[], callback: BasicCallback) => void
export type TawkAPI_removeTags = (tags: string[], callback: BasicCallback) => void
export type CustomStyle = {
  zIndex: number | string
}
