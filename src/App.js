import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddItem from './AddItem';
import Filter from './Filter';
import * as actions from './redux/actions'

class App extends React.Component {

  render() {
    console.log(this.props.todos);

    return (
      <div className="block">
      <h1>To-Do List</h1>
        <AddItem addTodo={this.props.addTodo} />
        <Filter setFilter={this.props.setFilter} filter={this.props.filter} />
        <Todo list={this.props.todos} onChange={this.props.toggleTodo} filter={this.props.filter} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => {
      dispatch(actions.setFilter(filter));
    },
    addTodo: text => {
      dispatch(actions.addTodo(text));
    },
    toggleTodo: id => {
      dispatch(actions.toggleTodo(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
