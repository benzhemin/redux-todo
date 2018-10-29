import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <FilterTodo />
      </div>
    );
  }
}

export default App;
