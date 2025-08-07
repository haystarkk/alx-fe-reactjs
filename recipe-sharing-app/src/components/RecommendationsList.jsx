import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="recommendations-list">
      <h2>✨ Recommended For You</h2>
      {recommendations.length > 0 ? (
        <div className="recipes-grid">
          {recommendations.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <p className="categories">
                  {recipe.categories?.join(' • ')}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-state">
          Save some favorites to get personalized recommendations!
        </p>
      )}
    </div>
  );
};

export default RecommendationsList;
