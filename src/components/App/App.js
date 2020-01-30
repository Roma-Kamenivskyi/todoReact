import React, { Component } from 'react';
import '../../bootstrap.min.css';

import TodoList from '../TodoList';
import Header from '../Header';
import FormAddTodo from '../FormAddTodo';
import Filter from '../Filter';

import './App.css';

class App extends Component {
  state = {
    todos: [
      this.createTodoItem('Clear teeth'),
      this.createTodoItem('Go sleep'),
      this.createTodoItem('Go eat')
    ],
    important: false,
    done: false,
    searchValue: ''
  };

  createTodoItem(value) {
    return {
      value,
      important: false,
      done: false,
      id: Math.random() * 100
    };
  }

  deleteItem = id => {
    this.setState(({ todos }) => {
      const newArray = todos.filter(todo => todo.id !== id);
      return { todos: newArray };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }; // Creating new item and change state done
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleDone = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'done')
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'important')
      };
    });
  };

  addTodoItem = text => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todos }) => {
      const newArray = [...todos, newItem];
      return { todos: newArray };
    });
  };

  onActiveFilterClick = () => {
    const activeTodos = this.state.todos.filter(todo => !todo.done);
    console.log(activeTodos);
  };

  onSearchTodos = searchValue => {
    this.setState({ searchValue });
  };

  search = (array, term) => {
    if (term.trim() === '') {
      return array;
    }

    return array.filter(item =>
      item.value.toLowerCase().includes(term.toLowerCase())
    );
  };

  render() {
    const { todos, searchValue } = this.state;

    const doneCount = todos.filter(el => el.done).length;
    const todoCount = todos.length - doneCount;
    const visibleItems = this.search(todos, searchValue);

    return (
      <div className='App'>
        <div className='container'>
          <Header todo={todoCount} done={doneCount} />
          <Filter
            todos={todos}
            onActive={this.onActiveFilterClick}
            onSearch={this.onSearchTodos}
          />
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <FormAddTodo
            onTodoItemAdded={this.addTodoItem}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
