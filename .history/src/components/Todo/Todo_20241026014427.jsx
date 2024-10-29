import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  return (
    <li>
      <input 
        type="checkbox" 
        id='checkbox'
        checked={todo.status === 'completed'}
      />
      <label htmlFor='checkbox'>{todo.text}</label>
      <button><FaTrashAlt /></button>
    </li>
  );
}

