import React, {Component} from 'react';
import './App.css';

function Filter({setFilter, filter}) {
    console.log(setFilter);
  return (
    <div className="btn-container">
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>All</button>
      <button onClick={() => setFilter('active')} disabled={filter === 'active'}>Active</button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completed</button>
    </div>
  )
}

export default Filter;