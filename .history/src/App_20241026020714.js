import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [filter, setFilter] = useState();
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
