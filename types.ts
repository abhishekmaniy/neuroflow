// Types generated from your Prisma schema

export type Direction = 'LEFT' | 'RIGHT' | 'TOP' | 'DOWN'
export type NodeSource = 'AI' | 'USER'
export type GeneratedBy = 'MANUAL' | 'AI'
export type TeamRole = 'OWNER' | 'ADMIN' | 'MEMBER'
export type Role = 'USER' | 'ASSISTANT'

export interface Message {
  id: string
  chatId: string
  role: Role
  content: string
  createdAt: string // ISO Date string
  Chat?: Chat
}

export interface MindMap {
  id: string
  title: string
  workspaceId: string
  createdAt: string
  updatedAt: string
  userId: string
  isPublic: boolean
  generatedBy: GeneratedBy
  chatId?: string | null
  Chat?: Chat | null
  workspace: Workspace
  User: User
  nodes: Node[]
}

export interface Chat {
  id: string
  userId?: string | null
  mindMapId: string
  createdAt: string
  updatedAt: string
  User?: User | null
  mindMap: MindMap
  Message: Message[]
}

export interface Team {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  members: TeamMember[]
  workspaceId: string
  workspace: Workspace
}

export interface TeamMember {
  id: string
  userId: string
  teamId: string
  role: TeamRole
  joinedAt: string
  user: User
  team: Team
}

export interface Workspace {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  teams: Team[]
  mindmaps: MindMap[]
  flowcharts: Flowchart[]
  whiteboards: Whiteboard[]
  userId?: string | null
  User?: User | null
}

export interface Flowchart {
  id: string
  title: string
  workspaceId: string
  createdAt: string
  updatedAt: string
  workspace: Workspace
  // ...other fields...
}

export interface Whiteboard {
  id: string
  title: string
  workspaceId: string
  createdAt: string
  updatedAt: string
  workspace: Workspace
  // ...other fields...
}

export interface Node {
  id: string
  mindMapId: string
  parentId?: string | null
  content: string
  positionX: number
  positionY: number
  direction: Direction
  createdBy: NodeSource
  createdAt: string
  updatedAt: string
  mindMap: MindMap
  parent?: Node | null
  children: Node[]
}

export interface SubscriptionPlan {
  id: string
  name: string
  price: number
  currency: string
  features: string[]
  isDefault: boolean
  UserSubscription: UserSubscription[]
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
  isProfileSetup: boolean
  Chat: Chat[]
  MindMap: MindMap[]
  UserSubscription?: UserSubscription | null
  TeamMember: TeamMember[]
  workspace: Workspace[]
}

export interface UserSubscription {
  id: string
  userId: string
  planId: string
  startedAt: string
  expiresAt: string
  stripeCustomerId?: string | null
  stripeSubscriptionId?: string | null
  SubscriptionPlan: SubscriptionPlan
  User: User
}