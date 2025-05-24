import { MindMap, Node } from '@/types';
import { create } from 'zustand';

interface MindMapState {
  mindMap: MindMap | null;
  selectedNodeId: string | null;

  setMindMap: (mindMap: MindMap) => void;
  clearMindMap: () => void;

  selectNode: (nodeId: string | null) => void;

  addNode: (node: Node) => void;
  updateNode: (node: Node) => void;
  removeNode: (nodeId: string) => void;

  updateTitle: (title: string) => void;
  togglePublic: () => void;
}

export const useMindMapStore = create<MindMapState>((set, get) => ({
  mindMap: null,
  selectedNodeId: null,

  setMindMap: (mindMap) => set({ mindMap }),
  clearMindMap: () => set({ mindMap: null, selectedNodeId: null }),

  selectNode: (nodeId) => set({ selectedNodeId: nodeId }),

  addNode: (node) =>
    set((state) => ({
      mindMap: state.mindMap
        ? { ...state.mindMap, nodes: [...state.mindMap.nodes, node] }
        : state.mindMap,
    })),

  updateNode: (updatedNode) =>
    set((state) => ({
      mindMap: state.mindMap
        ? {
            ...state.mindMap,
            nodes: state.mindMap.nodes.map((node) =>
              node.id === updatedNode.id ? updatedNode : node
            ),
          }
        : state.mindMap,
    })),

  removeNode: (nodeId) =>
    set((state) => ({
      mindMap: state.mindMap
        ? {
            ...state.mindMap,
            nodes: state.mindMap.nodes.filter((node) => node.id !== nodeId),
          }
        : state.mindMap,
      selectedNodeId:
        state.selectedNodeId === nodeId ? null : state.selectedNodeId,
    })),

  updateTitle: (title) =>
    set((state) => ({
      mindMap: state.mindMap ? { ...state.mindMap, title } : state.mindMap,
    })),

  togglePublic: () =>
    set((state) => ({
      mindMap: state.mindMap
        ? { ...state.mindMap, isPublic: !state.mindMap.isPublic }
        : state.mindMap,
    })),
}));
