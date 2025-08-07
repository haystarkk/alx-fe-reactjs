import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  
  // Recipe actions
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }]
  })),
  
  // Favorite actions
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  toggleFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.includes(recipeId)
      ? state.favorites.filter(id => id !== recipeId)
      : [...state.favorites, recipeId]
  })),
  
  // Recommendation actions
  generateRecommendations: () => set((state) => {
    const favoriteCategories = state.recipes
      .filter(recipe => state.favorites.includes(recipe.id))
      .flatMap(recipe => recipe.categories || []);
    
    const recommended = state.recipes
      .filter(recipe => 
        !state.favorites.includes(recipe.id) &&
        recipe.categories?.some(cat => favoriteCategories.includes(cat))
      )
      .slice(0, 5);
    
    return { recommendations: recommended };
  }),
  
  // Getter functions
  getFavoriteRecipes: () => {
    const { recipes, favorites } = get();
    return recipes.filter(recipe => favorites.includes(recipe.id));
  }
}));

export default useRecipeStore;
