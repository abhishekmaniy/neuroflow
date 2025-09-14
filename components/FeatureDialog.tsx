import React, { useState } from 'react'

const featureData = {
  mindmap: {
    title: 'Create Mindmap',
    description: 'Generate a visual map of your ideas and concepts. Mindmaps help you organize thoughts and see connections clearly.',
    image: '/images/mindmap.svg', // Replace with your image path
    placeholder: 'Describe your mindmap topic or idea...',
  },
  flowchart: {
    title: 'Create Flowchart',
    description: 'Design a flowchart to visualize processes, workflows, or algorithms. Perfect for planning and communication.',
    image: '/images/flowchart.svg', // Replace with your image path
    placeholder: 'Describe your flowchart process...',
  },
  whiteboard: {
    title: 'Create Whiteboard',
    description: 'Start a collaborative whiteboard for brainstorming, sketching, or planning with your team.',
    image: '/images/whiteboard.svg', // Replace with your image path
    placeholder: 'Describe what you want to brainstorm...',
  },
}

type FeatureType = 'mindmap' | 'flowchart' | 'whiteboard'

interface FeatureDialogProps {
  open: boolean
  onClose: () => void
  feature: FeatureType
  onGenerate: (title: string, prompt: string) => void
}

const FeatureDialog: React.FC<FeatureDialogProps> = ({
  open,
  onClose,
  feature,
  onGenerate,
}) => {
  const [title, setTitle] = useState('')
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  if (!open) return null

  const { title: featureTitle, description, image, placeholder } = featureData[feature]

  const handleGenerate = async () => {
    setLoading(true)
    await onGenerate(title, prompt)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-4 relative">
        <button
          className="absolute top-4 right-4 text-blue-400 hover:text-blue-700 dark:hover:text-blue-200 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col items-center mb-6">
          <img src={image} alt={featureTitle} className="w-20 h-20 mb-4" />
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-2">{featureTitle}</h2>
          <p className="text-blue-500 dark:text-blue-300 text-center">{description}</p>
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 dark:text-blue-200 font-semibold mb-1">Title</label>
          <input
            className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-blue-700 dark:text-blue-200 font-semibold mb-1">Prompt</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            rows={3}
            placeholder={placeholder}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition flex items-center justify-center"
          onClick={handleGenerate}
          disabled={loading || !title || !prompt}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
          Generate
        </button>
      </div>
    </div>
  )
}

export default FeatureDialog