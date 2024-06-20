import { create } from 'zustand';

const store = (set) => ({
  selectedCategory: 'all',
  setSelectedCategory: (id) => set((store) => ({ selectedCategory: id })),
});

export const useStore = create(store);
