import { create } from 'zustand'

interface Subscription {
  id: string
  status: string
  [key: string]: any
}

interface UserData {
  id: string
  name: string
  email: string
  subscription?: Subscription | null
}

interface UserStore {
  user: UserData | null
  subscription: Subscription | null
  setUser: (user: UserData) => void
  setSubscription: (subscription: Subscription | null) => void
  clearUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  subscription: null,
  setUser: (user) => set({ user }),
  setSubscription: (subscription) => set({ subscription }),
  clearUser: () => set({ user: null, subscription: null }),
}))