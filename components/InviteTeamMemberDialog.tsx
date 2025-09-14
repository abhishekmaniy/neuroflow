'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { TeamRole } from '@/lib/generated/prisma'

interface InviteTeamMemberDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  onInvite: (email: string, role: TeamRole) => Promise<void>
  loading?: boolean
}

const InviteTeamMemberDialog: React.FC<InviteTeamMemberDialogProps> = ({
  open,
  setOpen,
  onInvite,
  loading = false
}) => {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<TeamRole>(TeamRole.MEMBER)

  const handleInvite = async () => {
    if (!email.trim()) return
    await onInvite(email, role)
    setOpen(false)
    setEmail('')
    setRole(TeamRole.MEMBER)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='max-w-md w-full rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-900 bg-white/90 dark:bg-gray-900/90'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-blue-700 dark:text-blue-200'>
            Invite Team Member
          </DialogTitle>
          <DialogDescription className='text-blue-500 dark:text-blue-300'>
            Enter the email address of the person you want to invite to this team.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4 mt-4'>
          <div>
            <Label className='text-blue-700 dark:text-blue-200'>
              Email Address
            </Label>
            <Input
              type='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder='user@example.com'
              className='rounded-lg border-blue-200 dark:border-blue-700 focus:ring-2 focus:ring-blue-400 transition'
              disabled={loading}
            />
          </div>
          <div>
            <Label className='text-blue-700 dark:text-blue-200'>
              Role
            </Label>
            <select
              value={role}
              onChange={e => setRole(e.target.value as TeamRole)}
              className='w-full px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
              disabled={loading}
            >
              <option value={TeamRole.MEMBER}>Member</option>
              <option value={TeamRole.ADMIN}>Admin</option>
              <option value={TeamRole.OWNER}>Owner</option>
            </select>
          </div>
        </div>
        <DialogFooter className='sm:justify-start mt-6'>
          <Button
            onClick={handleInvite}
            type='button'
            variant='secondary'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition disabled:opacity-60'
            disabled={!email.trim() || loading}
          >
            {loading ? 'Inviting...' : 'Send Invitation'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default InviteTeamMemberDialog