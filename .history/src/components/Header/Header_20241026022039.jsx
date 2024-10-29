import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button>{value}</button>
          </li>
        ))
        }
      </ul>
    </header>
  );
}

