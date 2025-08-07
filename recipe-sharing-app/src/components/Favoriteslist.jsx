import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const FavoritesList = () => {
  const favoriteRecipes = useRecipeStore((state) => state.getFavoriteRecipes());

  return (
    <div className="favorites-list">
      <h2>⭐ My Favorite Recipes</h2>
      {favoriteRecipes.length > 0 ? (
        <div className="recipes-grid">
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </Link>
              <FavoriteButton recipeId={recipe.id} />
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-state">You haven't favorited any recipes yet!</p>
      )}
    </div>
  );
};

export default FavoritesList;
