'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface CreateDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  onCreate: (name: string) => Promise<void>
  title: string
  description: string
  placeholder?: string
  loading?: boolean
  disableClose?: boolean
}

const CreateDialog: React.FC<CreateDialogProps> = ({
  open,
  setOpen,
  onCreate,
  title,
  description,
  placeholder = 'Enter name',
  loading = false,
  disableClose = false
}) => {
  const [name, setName] = React.useState('')
  const handleCreate = async () => {
    if (!name.trim()) return
    await onCreate(name)
    if (!disableClose) setOpen(false)
    setName('')
  }

  return (
    <Dialog open={open} onOpenChange={disableClose ? () => {} : setOpen} modal>
      <DialogTrigger asChild>
        <button style={{ display: 'none' }}>Open</button>
      </DialogTrigger>
      <DialogContent className='max-w-md w-full rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-900 bg-white/90 dark:bg-gray-900/90'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold text-blue-700 dark:text-blue-200'>
            {title}
          </DialogTitle>
          <DialogDescription className='text-blue-500 dark:text-blue-300'>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-2 mt-4'>
          <Label className='text-blue-700 dark:text-blue-200'>
            {title} Name
          </Label>
          <Input
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder={placeholder}
            className='rounded-lg border-blue-200 text-white dark:border-blue-700 focus:ring-2 focus:ring-blue-400 transition'
            disabled={loading}
          />
        </div>
        <DialogFooter className='sm:justify-start mt-6'>
          <Button
            onClick={handleCreate}
            type='button'
            variant='secondary'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition disabled:opacity-60'
            disabled={!name.trim() || loading}
          >
            {loading ? 'Creating...' : `Create ${title}`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateDialog