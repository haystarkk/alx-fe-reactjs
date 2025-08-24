import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
import './App.css';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <header>
          <h1>React Query Demo</h1>
          <p className="subtitle">Advanced Data Handling with React Query</p>
        </header>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
