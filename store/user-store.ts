import { User, Team, Workspace, SubscriptionPlan, UserSubscription, TeamMember } from '@/types'
import { create } from 'zustand'

interface UserStore {
  user: User | null
  subscription: UserSubscription | null
  teams: Team[] // Teams the user is a member of
  workspaces: Workspace[] // Workspaces the user has access to
  setUser: (user: User) => void
  setSubscription: (subscription: UserSubscription | null) => void
  setTeams: (teams: Team[]) => void
  setWorkspaces: (workspaces: Workspace[]) => void
  clearUser: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  subscription: null,
  teams: [],
  workspaces: [],
  setUser: (user) =>
    set({
      user,
      subscription: user.UserSubscription ?? null,
      teams: user.workspace ? user.workspace.map((ws: Workspace) => ws.teams).flat() : [],
      workspaces: user.workspace ?? [],
    }),
  setSubscription: (subscription) => set({ subscription }),
  setTeams: (teams) => set({ teams }),
  setWorkspaces: (workspaces) => set({ workspaces }),
  clearUser: () =>
    set({
      user: null,
      subscription: null,
      teams: [],
      workspaces: [],
    }),
}))