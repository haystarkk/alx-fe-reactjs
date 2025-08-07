import React from 'react';
import { Link } from 'react-router-dom';  // Added this import
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.getFilteredRecipes());

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/${recipe.id}`} className="recipe-link">  {/* Added Link */}
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              {recipe.cookingTime && <span>⏱️ {recipe.cookingTime} mins</span>}
              {recipe.difficulty && <span>⚡ {recipe.difficulty}</span>}
            </Link>
          </div>
        ))
      ) : (
        <p className="no-results">No recipes match your search criteria.</p>
      )}
    </div>
  );
};

export default RecipeList;
