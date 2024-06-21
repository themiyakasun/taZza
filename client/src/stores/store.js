import { create } from 'zustand';

const store = (set) => ({
  selectedCategory: 'all',
  setSelectedCategory: (id) => set((store) => ({ selectedCategory: id })),
  productSearchKey: '',
  setProductSearchKey: (key) => set((store) => ({ productSearchKey: key })),
});

export const useStore = create(store);
