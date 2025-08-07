import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <RecommendationsList />
              <RecipeList />
            </>
          } />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
