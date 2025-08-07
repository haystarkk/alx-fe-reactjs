import React from 'react';
import useRecipeStore from '../stores/recipeStore';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.getFilteredRecipes());

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p className="no-results">No recipes match your search criteria.</p>
      )}
    </div>
  );
};

export default RecipeList;
