import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { 
      id: 1, 
      title: 'Spaghetti Carbonara', 
      description: 'Classic Italian pasta with eggs, cheese, and pancetta' 
    },
    { 
      id: 2, 
      title: 'Greek Salad', 
      description: 'Fresh vegetables with feta cheese and olives' 
    }
  ],
  addRecipe: (newRecipe) => 
    set((state) => ({
      recipes: [...state.recipes, { ...newRecipe, id: Date.now() }]
    })),
  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    }))
}));

export default useRecipeStore;
