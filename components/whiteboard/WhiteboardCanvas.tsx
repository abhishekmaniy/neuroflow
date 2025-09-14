'use client'

import React, { useEffect, useState } from 'react'
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import axios from 'axios'
import { useParams } from 'next/navigation'

interface WhiteboardCanvasProps {
  whiteboardData: any
}

export default function WhiteboardCanvas({ whiteboardData }: WhiteboardCanvasProps) {
  const [store, setStore] = useState<any>(null)
  const params = useParams()
  const { teamId, whiteboardId } = params
  
  // Save whiteboard data when it changes
  const handleStoreChange = async (store: any) => {
    if (!store || whiteboardId === 'new') return
    
    try {
      // Serialize the store to JSON
      const snapshot = store.getSnapshot()
      
      // Save to the backend
      await axios.put(`/api/team/${teamId}/whiteboard/${whiteboardId}`, {
        content: snapshot
      })
    } catch (error) {
      console.error('Error saving whiteboard:', error)
    }
  }

  // Initialize the store with the whiteboard data
  useEffect(() => {
    if (whiteboardData && whiteboardData.content) {
      setStore(whiteboardData.content)
    }
  }, [whiteboardData])

  return (
    <div className="h-full w-full">
      <Tldraw
        persistenceKey={`whiteboard-${whiteboardId}`}
        store={store}
        onMount={(app) => {
          // If this is a new whiteboard, create a default document
          if (whiteboardId === 'new') {
            // The app is ready, you can use it now
            const initialStore = app.store
            setStore(initialStore)
          }
        }}
        onChange={(app) => {
          // Debounce the save operation
          const timeoutId = setTimeout(() => {
            handleStoreChange(app.store)
          }, 1000)
          
          return () => clearTimeout(timeoutId)
        }}
      />
    </div>
  )
}