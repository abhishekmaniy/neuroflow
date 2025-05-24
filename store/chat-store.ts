import { Chat, Message } from '@/types'
import { create } from 'zustand'



type ChatStore = {
  chat: Chat | null
  setChat: (chat: Chat) => void
  addMessage: (message: Message) => void
  clearChat: () => void
}

export const useChatStore = create<ChatStore>((set) => ({
  chat: null,
  setChat: (chat) => set({ chat }),
  addMessage: (message) =>
    set((state) =>
      state.chat
        ? {
            chat: {
              ...state.chat,
              Message: [...state.chat.Message, message],
            },
          }
        : state
    ),
  clearChat: () => set({ chat: null }),
}))