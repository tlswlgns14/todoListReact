import React from 'react';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li>
            <button>{value}</button>
          </li>
        ))
        }
      </ul>
    </header>
  );
}

