import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Pasta Carbonara', description: 'Classic Italian pasta dish with eggs, cheese, and pancetta' },
    { id: 2, title: 'Vegetable Stir Fry', description: 'Quick and healthy vegetable dish' }
  ],
  addRecipe: (newRecipe) => 
    set((state) => ({ 
      recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
    })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
