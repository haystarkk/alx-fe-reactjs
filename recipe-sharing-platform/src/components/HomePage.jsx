import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-center md:text-left">Delicious Recipes</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
          
          <Link
            to="/add-recipe"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center whitespace-nowrap"
          >
            Add New Recipe
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2">Loading recipes...</p>
        </div>
      ) : filteredRecipes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No recipes found</p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 text-blue-500 hover:text-blue-700"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <Link 
              to={`/recipe/${recipe.id}`} 
              key={recipe.id}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] h-full flex flex-col">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                  <p className="text-gray-600 mb-4">{recipe.summary}</p>
                </div>
                <div className="px-4 pb-4">
                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    View Recipe
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
