import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
    expect(screen.getByText('Deploy to production')).toBeInTheDocument();
    
    // Check if completed todo has line-through
    const completedTodo = screen.getByText('Build a project');
    expect(completedTodo).toHaveStyle('text-decoration: line-through');
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Enter a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'Test new todo' } });
    fireEvent.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('Test new todo')).toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    fireEvent.click(addButton);
    
    // Check that no new todo was added
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount);
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Toggle todo completion
    fireEvent.click(todoText);
    
    // Check if todo is now completed
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    // Toggle again
    fireEvent.click(todoText);
    
    // Check if todo is not completed
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('listitem').length;
    const deleteButtons = screen.getAllByLabelText(/Delete/);
    
    // Delete first todo
    fireEvent.click(deleteButtons[0]);
    
    // Check that todo was deleted
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodoCount - 1);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('displays correct todo statistics', () => {
    render(<TodoList />);
    
    // Check initial stats
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    
    // Add a new todo
    const input = screen.getByPlaceholderText('Enter a new todo...');
    const addButton = screen.getByText('Add Todo');
    fireEvent.change(input, { target: { value: 'New test todo' } });
    fireEvent.click(addButton);
    
    // Check updated stats
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 3')).toBeInTheDocument();
  });
});
