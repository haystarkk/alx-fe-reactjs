import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
