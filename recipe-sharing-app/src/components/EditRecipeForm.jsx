import { useState } from 'react';
import useRecipeStore from '../stores/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients?.join('\n') || '',
    instructions: recipe.instructions || ''
  });
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, {
      ...formData,
      ingredients: formData.ingredients.split('\n')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        required
      />
      <textarea
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        required
      />
      <textarea
        value={formData.ingredients}
        onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
        placeholder="One ingredient per line"
      />
      <textarea
        value={formData.instructions}
        onChange={(e) => setFormData({...formData, instructions: e.target.value})}
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
