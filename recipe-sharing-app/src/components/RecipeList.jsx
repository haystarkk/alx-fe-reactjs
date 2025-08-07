import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const { recipes, removeRecipe } = useRecipeStore();

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeRecipe(recipe.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
