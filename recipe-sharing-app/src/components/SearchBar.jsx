import React from 'react';
import useRecipeStore from '../stores/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes by name or description..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
