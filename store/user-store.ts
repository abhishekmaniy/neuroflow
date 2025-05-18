import { create } from 'zustand'
import { User, UserSubscription, SubscriptionPlan } from '@/lib/generated/prisma/client'

type UserState = {
  user: User | null
  subscription: UserSubscription & { plan: SubscriptionPlan } | null
  setUser: (user: User) => void
  setSubscription: (subscription: UserSubscription & { plan: SubscriptionPlan }) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  subscription: null,

  setUser: (user) => set({ user }),

  setSubscription: (subscription) => set({ subscription }),

  clearUser: () => set({ user: null, subscription: null }),
}))
