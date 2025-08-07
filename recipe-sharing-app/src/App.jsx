import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <RecommendationsList />
                <RecipeList />
              </>
            } />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/add" element={<AddRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
