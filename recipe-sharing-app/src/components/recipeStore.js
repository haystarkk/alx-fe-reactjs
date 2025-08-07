import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filters: {
    ingredients: '',
    maxCookingTime: '',
    difficulty: ''
  },
  
  // Actions
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }]
  })),
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  setFilter: (filterName, value) => set((state) => ({
    filters: { ...state.filters, [filterName]: value }
  })),
  
  getFilteredRecipes: () => {
    const { recipes, searchTerm, filters } = get();
    
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesIngredients = filters.ingredients ? 
        recipe.ingredients?.some(ing => 
          ing.toLowerCase().includes(filters.ingredients.toLowerCase())
        ) : true;
      
      const matchesTime = filters.maxCookingTime ?
        recipe.cookingTime <= parseInt(filters.maxCookingTime) : true;
      
      const matchesDifficulty = filters.difficulty ?
        recipe.difficulty === filters.difficulty : true;
      
      return matchesSearch && matchesIngredients && matchesTime && matchesDifficulty;
    });
  }
}));

export default useRecipeStore;
