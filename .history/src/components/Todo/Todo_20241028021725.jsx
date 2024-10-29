import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status})
  }
  const handleDelete = () => onDelete(todo)
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox} 
        type="checkbox" 
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox' className={styles.text}>{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

