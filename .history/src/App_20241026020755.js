import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const filters = ['all', 'active', 'completed']
function App() {
  const [filter, setFilter] = useState(filter[0]);
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
