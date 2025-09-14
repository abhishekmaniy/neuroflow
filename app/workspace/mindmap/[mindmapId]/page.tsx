// app/mindmap/page.tsx
import { Suspense } from 'react'
import MindMapClient from './MindMapClient'

export default function MindMapPage () {
  return (
    <Suspense
      fallback={
        <div className='text-center mt-20 text-gray-500'>
          Loading mind map...
        </div>
      }
    >
      <MindMapClient />
    </Suspense>
  )
}
