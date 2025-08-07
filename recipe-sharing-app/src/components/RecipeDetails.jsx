import { useParams } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients?.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>

      <div className="recipe-actions">
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
