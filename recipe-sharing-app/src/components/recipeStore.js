import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  // Add/remove favorites
  toggleFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.includes(recipeId)
      ? state.favorites.filter(id => id !== recipeId)
      : [...state.favorites, recipeId]
  })),
  
  // Generate recommendations based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const favoriteCategories = recipes
      .filter(recipe => favorites.includes(recipe.id))
      .flatMap(recipe => recipe.categories || []);
    
    set({
      recommendations: recipes
        .filter(recipe => 
          !favorites.includes(recipe.id) &&
          recipe.categories?.some(cat => favoriteCategories.includes(cat))
        )
        .slice(0, 5)
    });
  },
  
  // Get favorite recipes with full data
  getFavoriteRecipes: () => {
    const { recipes, favorites } = get();
    return recipes.filter(recipe => favorites.includes(recipe.id));
  }
}));

export default useRecipeStore;
