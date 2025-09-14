import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import InviteTeamMemberDialog from './InviteTeamMemberDialog'
import { TeamRole } from '@/lib/generated/prisma'

interface TeamMember {
  id: string
  user: {
    id: string
    name: string
    email: string
  }
  role: TeamRole
}

const iconClass =
  'w-5 h-5 mr-2 -ml-1 inline-block align-middle text-white group-hover:text-blue-100 transition'

const featureData = {
  mindmap: {
    title: 'Create Mindmap',
    description: 'Generate a visual map of your ideas and concepts. Mindmaps help you organize thoughts and see connections clearly.',
    image: '/images/mindmap.svg',
    placeholder: 'Describe your mindmap topic or idea...',
  },
  flowchart: {
    title: 'Create Flowchart',
    description: 'Design a flowchart to visualize processes, workflows, or algorithms. Perfect for planning and communication.',
    image: '/images/flowchart.svg',
    placeholder: 'Describe your flowchart process...',
  },
  whiteboard: {
    title: 'Create Whiteboard',
    description: 'Start a collaborative whiteboard for brainstorming, sketching, or planning with your team.',
    image: '/images/whiteboard.svg',
    placeholder: 'Describe what you want to brainstorm...',
  },
}

type FeatureType = 'mindmap' | 'flowchart' | 'whiteboard'

const TeamTemplate = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [feature, setFeature] = useState<FeatureType>('mindmap')
  const [title, setTitle] = useState('')
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [members, setMembers] = useState<TeamMember[]>([])
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false)
  const [showOptions, setShowOptions] = useState(true)
  const [showPrompt, setShowPrompt] = useState(false)
  const [inviteLoading, setInviteLoading] = useState(false)
  const params = useParams()
  const teamId = params.teamId as string

  useEffect(() => {
    if (teamId) {
      fetchTeamMembers()
    }
  }, [teamId])

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`/api/team/${teamId}/members`)
      setMembers(response.data.members)
    } catch (error) {
      console.error('Error fetching team members:', error)
    }
  }

  const handleInviteMember = async (email: string, role: TeamRole) => {
    setInviteLoading(true)
    try {
      await axios.post(`/api/team/${teamId}/members`, { userEmail: email, role })
      await fetchTeamMembers() // Refresh the members list
    } catch (error) {
      console.error('Error inviting team member:', error)
      // You could add toast notification here
    } finally {
      setInviteLoading(false)
    }
  }

  const openDialog = (type: FeatureType) => {
    setFeature(type)
    setDialogOpen(true)
    setTitle('')
    setPrompt('')
    setShowOptions(true)
    setShowPrompt(false)
  }

  const handleGenerate = async () => {
    setLoading(true)
    try {
      // Call the API to generate content based on the prompt
      const response = await axios.post(`/api/gemini-process`, {
        prompt,
        title,
        featureType: feature,
        teamId
      })
      
      // Redirect to the appropriate feature route with the generated content ID
      window.location.href = `/team/${teamId}/${feature}/${response.data.id}`
    } catch (error) {
      console.error('Error generating content:', error)
      setLoading(false)
    }
  }
  
  const handleBootstrap = () => {
    // Redirect directly to the feature route without AI generation
    if (!title) {
      setTitle(`New ${feature.charAt(0).toUpperCase() + feature.slice(1)}`)
    }
    window.location.href = `/team/${teamId}/${feature}/new`
  }
  
  const handleOptionSelect = (option: 'ai' | 'bootstrap') => {
    if (option === 'ai') {
      setShowOptions(false)
      setShowPrompt(true)
    } else {
      handleBootstrap()
    }
  }

  const { title: featureTitle, description, image, placeholder } = featureData[feature]

  return (
    <div className="flex-1 flex flex-col h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-8 py-10 overflow-y-auto">
      {/* Feature Buttons */}
      <div className="flex gap-6 mb-10">
        <button
          className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition flex items-center"
          onClick={() => openDialog('mindmap')}
        >
          {/* Mindmap Icon */}
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6m0 6v6m9-9h-6m-6 0H3" />
          </svg>
          Create Mindmap
        </button>
        <button
          className="group bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition flex items-center"
          onClick={() => openDialog('flowchart')}
        >
          {/* Flowchart Icon */}
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
          </svg>
          Create Flowchart
        </button>
        <button
          className="group bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow transition flex items-center"
          onClick={() => openDialog('whiteboard')}
        >
          {/* Whiteboard Icon */}
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="12" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8" />
          </svg>
          Create Whiteboard
        </button>
      </div>

      {/* Dialog */}
      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-4 relative">
            <button
              className="absolute top-4 right-4 text-blue-400 hover:text-blue-700 dark:hover:text-blue-200 text-2xl"
              onClick={() => setDialogOpen(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-6">
              <img src={image} alt={featureTitle} className="w-20 h-20 mb-4" />
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-2">{featureTitle}</h2>
              <p className="text-blue-500 dark:text-blue-300 text-center">{description}</p>
            </div>
            
            {showOptions && (
              <div className="flex flex-col space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-200 text-center">Choose an option:</h3>
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl shadow transition flex items-center justify-center"
                  onClick={() => handleOptionSelect('ai')}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI Generated
                </button>
                <p className="text-sm text-blue-500 dark:text-blue-300 text-center">Let AI create a starting point based on your description</p>
                
                <button
                  className="w-full bg-white hover:bg-blue-50 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-200 font-semibold py-4 px-6 rounded-xl shadow border border-blue-200 dark:border-blue-700 transition flex items-center justify-center mt-4"
                  onClick={() => handleOptionSelect('bootstrap')}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Bootstrap (Clean Start)
                </button>
                <p className="text-sm text-blue-500 dark:text-blue-300 text-center">Start with a blank canvas</p>
              </div>
            )}
            
            {showPrompt && (
              <>
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
                <div className="flex space-x-4">
                  <button
                    className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-xl shadow transition flex items-center justify-center"
                    onClick={() => {
                      setShowOptions(true)
                      setShowPrompt(false)
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition flex items-center justify-center"
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
              </>
            )}
          </div>
        </div>
      )}

      {/* Team Members */}
      <div className="bg-white dark:bg-gray-900 border border-blue-100 dark:border-blue-900 rounded-2xl shadow-xl p-8 max-w-2xl w-full mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200">Team Members</h2>
          <button 
            className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition flex items-center"
            onClick={() => setInviteDialogOpen(true)}
          >
            {/* User Add Icon */}
            <svg className="w-5 h-5 mr-2 -ml-1 text-white group-hover:text-blue-100 transition" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-7a4 4 0 11-8 0 4 4 0 018 0zm-6 8a6 6 0 0112 0v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1z" />
            </svg>
            Add Members to Team
          </button>
        </div>
        <ul>
          {members.length > 0 ? members.map(member => (
            <li
              key={member.id}
              className="flex items-center justify-between py-3 border-b border-blue-50 dark:border-blue-900 last:border-b-0"
            >
              <div className="flex flex-col">
                <span className="text-blue-700 dark:text-blue-200 font-medium">{member.user.name}</span>
                <span className="text-blue-400 dark:text-blue-300 text-xs">{member.user.email}</span>
              </div>
              <span className="text-blue-500 dark:text-blue-400 text-sm bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                {member.role}
              </span>
            </li>
          )) : (
            <li className="text-blue-400 dark:text-blue-300 text-center py-4">
              No team members yet. Invite some members to get started!
            </li>
          )}
        </ul>
      </div>

      <InviteTeamMemberDialog
        open={inviteDialogOpen}
        setOpen={setInviteDialogOpen}
        onInvite={handleInviteMember}
        loading={inviteLoading}
      />
    </div>
  )
}

export default TeamTemplate