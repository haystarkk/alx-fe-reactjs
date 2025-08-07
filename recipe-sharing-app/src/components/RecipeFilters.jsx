import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecipeFilters = () => {
  const setFilter = useRecipeStore((state) => state.setFilter);

  return (
    <div className="filters">
      <div className="filter-group">
        <label>Ingredients:</label>
        <input
          type="text"
          placeholder="Filter by ingredient..."
          onChange={(e) => setFilter('ingredients', e.target.value)}
        />
      </div>
      
      <div className="filter-group">
        <label>Max Cooking Time (mins):</label>
        <input
          type="number"
          placeholder="30"
          onChange={(e) => setFilter('maxCookingTime', e.target.value)}
        />
      </div>
      
      <div className="filter-group">
        <label>Difficulty:</label>
        <select onChange={(e) => setFilter('difficulty', e.target.value)}>
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  );
};

export default RecipeFilters;
