import React, { Component } from 'react';
import '../../bootstrap.min.css';

import TodoList from '../TodoList';
import Header from '../Header';
import AddTodoForm from '../AddTodoForm';
import SearchPanel from '../SearchPanel';
import FilterTabs from '../FilterTabs';

import './App.css';

class App extends Component {
  state = {
    todos: [
      this.createTodoItem('Clear teeth'),
      this.createTodoItem('Go sleep'),
      this.createTodoItem('Go eat')
    ],
    searchValue: '',
    filter: 'all'
  };
  componentDidMount() {
    this.getTodosFromLocaleStorege();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      this.addToLocaleStorage();
    }
  }

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
    console.log(newItem);
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

  // locale storage operations
  addToLocaleStorage = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  };

  getTodosFromLocaleStorege = () => {
    this.setState({ todos: JSON.parse(localStorage.getItem('todos')) });
  };

  addTodoItem = text => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todos }) => {
      const newArray = [...todos, newItem];
      return { todos: newArray };
    });
    this.addToLocaleStorage();
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
  onFilter = (array, filter) => {
    switch (filter) {
      case 'all':
        return array;
      case 'active':
        return array.filter(item => !item.done);
      case 'done':
        return array.filter(item => item.done);
      default:
        return array;
    }
  };
  onFilterChange = filter => this.setState({ filter });

  render() {
    const { todos, searchValue, filter } = this.state;

    const doneCount = todos.filter(el => el.done).length;
    const todoCount = todos.length - doneCount;
    const visibleItems = this.onFilter(this.search(todos, searchValue), filter);

    return (
      <div className='App'>
        <div className='container'>
          <Header todo={todoCount} done={doneCount} />
          <SearchPanel onSearch={this.onSearchTodos}>
            <FilterTabs filter={filter} onFilterChange={this.onFilterChange} />
          </SearchPanel>
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <AddTodoForm
            onTodoItemAdded={this.addTodoItem}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
