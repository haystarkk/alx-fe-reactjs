import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta with eggs, cheese, and pancetta',
      ingredients: ['Pasta', 'Eggs', 'Pancetta', 'Parmesan'],
      instructions: 'Mix eggs with cheese, cook pancetta, combine with pasta'
    }
  ],
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }]
  })),
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id)
  }))
}));

export default useRecipeStore;
