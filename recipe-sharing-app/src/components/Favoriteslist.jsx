import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.getFavoriteRecipes());
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Update recommendations when favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites.length, generateRecommendations]);

  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map(recipe => (
            <div key={recipe.id} className="favorite-card">
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <span className="favorite-badge">❤️ Favorite</span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">No favorites yet. Start adding some!</p>
      )}
    </div>
  );
};

export default FavoritesList;
