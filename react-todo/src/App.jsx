import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Todo List</h1>
        <p>Manage your tasks efficiently</p>
      </header>
      <main className="app-main">
        <TodoList />
      </main>
    </div>
  );
}

export default App;
