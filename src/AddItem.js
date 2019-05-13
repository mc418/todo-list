import React, { Component } from 'react';
import './App.css'

class AddItem extends Component {
    state = {input: ''};
    render() {
      return (
        <div>
          <input 
            className="input-window"
            value={this.state.input}
            onChange={e => {
              this.setState({input: e.target.value});
            }}
          />
          <button 
            onClick={() => {
              this.props.addTodo(this.state.input);
              this.setState({input: ''});
            }}>
            Add New
          </button>
        </div>
      )
    }
  }

  export default AddItem;
  