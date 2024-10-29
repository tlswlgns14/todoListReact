import React from 'react';
import styles from './Header.module.css'

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))
        }
      </ul>
    </header>
  );
}

