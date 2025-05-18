// lib/toast.ts
import { toast as sonnerToast } from "sonner"
import type { ReactNode } from "react"

type ToastOptions = {
  title?: ReactNode
  description?: ReactNode
  action?: {
    label: string
    onClick: () => void
  }
  duration?: number
}

export function toast({ title, description, action, duration }: ToastOptions) {
  const id = sonnerToast(title, {
    description,
    duration,
    action,
  })

  return {
    id,
    dismiss: () => sonnerToast.dismiss(id),
    update: (options: ToastOptions) => {
      sonnerToast(title, { ...options, id }) // Reuse ID to update
    },
  }
}

export function useToast() {
  return {
    toast,
    dismiss: (id?: string) => {
      if (id) {
        sonnerToast.dismiss(id)
      }
    },
  }
}
