import React, {Component} from 'react';
import './App.css';

function Todo({list, onChange, filter}) {
    let filteredList = [];
    if (filter === 'all') {
        filteredList = list;
    } else if (filter === 'active') {
        filteredList = list.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
        filteredList = list.filter(todo => todo.completed)
    }
    console.log(filteredList);
  return (
    <ul>
      {filteredList.map((todo, index) => {
          console.log(todo);
        return (
          <li 
            key={todo.id} 
            style={{textDecoration: todo.completed? 'line-through' : 'none'}}
            // onClick={() => onChange(todo)}
            >
            <label className="container">            
              {todo.text}
              <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
                <span className="checkmark"></span>
              {/* </input> */}
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default Todo;
