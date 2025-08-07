import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipes/${recipe.id}`} className="recipe-content">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        {recipe.cookingTime && (
          <span className="cooking-time">⏱️ {recipe.cookingTime} mins</span>
        )}
      </Link>
      <FavoriteButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeCard;
