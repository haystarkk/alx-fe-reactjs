import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Generate recommendations on mount
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="recommendations-container">
      <h2>Recommended For You</h2>
      {recommendations.length > 0 ? (
        <div className="recommendations-grid">
          {recommendations.map(recipe => (
            <div key={recipe.id} className="recommendation-card">
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div className="recommendation-tags">
                  {recipe.categories?.map(cat => (
                    <span key={cat} className="tag">{cat}</span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">
          Add some favorites to get personalized recommendations!
        </p>
      )}
    </div>
  );
};

export default RecommendationsList;
