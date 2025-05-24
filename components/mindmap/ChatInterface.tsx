import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Loader, SendIcon, Bot, User } from 'lucide-react'
import { useMindMapStore } from '@/store/mindmap-store'
import { Role } from '@/lib/generated/prisma'
import axios from 'axios'
import '@/styles/chat-animations.css'
import { useChatStore } from '@/store/chat-store'

type ChatInterfaceProps = {
  onRegenerateMap: (message: string) => void
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onRegenerateMap }) => {
  const { mindMap, setMindMap } = useMindMapStore()
  const [isSending, setIsSending] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState<string | null>(null)
  const endOfMessagesRef = useRef<HTMLDivElement>(null)
  const { chat, setChat, addMessage } = useChatStore()

  console.log("chat" , chat)

  const handleSendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || !mindMap) return

    const tempMessage = {
      id: `temp-${Date.now()}`,
      chatId: mindMap.chatId,
      role: Role.USER,
      content: trimmed,
      createdAt: new Date().toISOString()
    }

    // Optimistically add the user message
    addMessage(tempMessage)

    setInput('')
    setIsSending(true)

    try {
      const res = await axios.post('/api/gemini-chat', {
        content: trimmed,
        chatId: mindMap.chatId
      })
      const data = await res.data

      if (data.mindMapObject) {
        setMindMap(data.mindMapObject)
      }
      setChat(data.chat)
    } catch (error) {
      console.error('Failed to send message', error)
    } finally {
      setIsSending(false)
    }
  }

  const lastMsgRole = chat?.Message?.length
    ? chat.Message[chat.Message.length - 1].role
    : null

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chat?.Message])

  return (
    <div className='flex flex-col h-full rounded-2xl border border-muted bg-background shadow-md'>
      <div className='px-4 py-3 border-b border-muted'>
        <h3 className='text-lg font-semibold text-foreground'>AI Assistant</h3>
        <p className='text-sm text-muted-foreground'>
          Ask questions or suggest changes to your mind map
        </p>
      </div>

      <div className='flex-1 overflow-y-auto p-4 space-y-3' aria-live='polite'>
        {(chat?.Message ?? mindMap?.Chat?.Message ?? []).map(msg => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              msg.role === Role.USER ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.role !== Role.USER && (
              <div className='flex-shrink-0'>
                <Bot size={20} className='text-blue-400' />
              </div>
            )}
            <div
              className={`px-4 py-2 max-w-[80%] rounded-xl text-sm leading-relaxed transition-colors
          ${
            msg.role === Role.USER
              ? 'bg-neuro-primary text-white'
              : 'bg-muted text-foreground'
          }
          hover:bg-blue-50 dark:hover:bg-gray-700
        `}
              tabIndex={0}
              aria-label={msg.content}
            >
              {msg.content}
            </div>
            {msg.role === Role.USER && (
              <div className='flex-shrink-0'>
                <User size={20} className='text-gray-400' />
              </div>
            )}
          </div>
        ))}
        {/* Typing indicator for AI */}
        {isSending && lastMsgRole === Role.USER && (
          <div className='flex items-end gap-2 justify-start'>
            <div className='flex-shrink-0'>
              <Bot size={20} className='text-blue-400' />
            </div>
            <div
              className='px-4 py-2 max-w-[80%] rounded-xl text-sm bg-muted text-foreground flex items-center'
              style={{ minHeight: 32 }}
              aria-label='AI is typing'
            >
              <span className='typing-dot' />
              <span className='typing-dot' />
              <span className='typing-dot' />
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      <div className='p-3 border-t border-muted'>
        <div className='flex items-center gap-2 relative'>
          <input
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Ask about your mind map...'
            className='flex-1 px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neuro-light transition'
            aria-label='Type your message'
            disabled={isSending}
          />
          <Button
            onClick={handleSendMessage}
            size='icon'
            className='bg-neuro-primary hover:bg-neuro-secondary disabled:opacity-60'
            aria-label='Send message'
            disabled={isSending || !input.trim()}
          >
            {isSending ? (
              <Loader className='animate-spin' />
            ) : (
              <SendIcon size={18} />
            )}
          </Button>
        </div>
        {error && (
          <div className='mt-2 text-xs text-red-500' role='alert'>
            {error}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatInterface