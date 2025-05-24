export type Direction = 'LEFT' | 'RIGHT' | 'TOP' | 'DOWN';

export type NodeSource = 'AI' | 'USER';

export type GeneratedBy = 'MANUAL' | 'AI';

export type Role = 'USER' | 'ASSISTANT';

export interface Message {
  id: string | null;
  chatId: string;
  role: Role;
  content: string;
  createdAt: string; // ISO Date string
  Chat?: Chat;
}

export interface MindMap {
  id: string;
  title: string;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  userId: string;
  isPublic: boolean;
  generatedBy: GeneratedBy;
  chatId: string;
  Chat?: Chat | null;
  User: User;
  nodes: Node[];
}

export interface Chat {
  id: string;
  userId?: string | null;
  mindMapId: string;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  User?: User | null;
  mindMap: MindMap;
  Message: Message[];
}

export interface Node {
  id: string;
  mindMapId: string;
  parentId?: string | null;
  content: string;
  positionX: number;
  positionY: number;
  direction: Direction;
  createdBy: NodeSource;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string

  mindMap: MindMap;
  parent?: Node | null;
  children: Node[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  features: string[];
  isDefault: boolean;
  UserSubscription: UserSubscription[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  Chat: Chat[];
  MindMap: MindMap[];
  UserSubscription?: UserSubscription | null;
}

export interface UserSubscription {
  id: string;
  userId: string;
  planId: string;
  startedAt: string; // ISO Date string
  expiresAt: string; // ISO Date string
  stripeCustomerId?: string | null;
  stripeSubscriptionId?: string | null;
  SubscriptionPlan: SubscriptionPlan;
  User: User;
}
