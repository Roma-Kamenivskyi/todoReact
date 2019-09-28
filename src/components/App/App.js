import React, { Component } from "react";
import TodoList from "../TodoList";
import Header from "../Header";
import FormAddTodo from "../FormAddTodo";
import Filter from "../Filter";
import "./App.css";

class App extends Component {
  randomId = Math.random() * 100;

  state = {
    todos: [
      this.createTodoItem("Eat chicken"),
      this.createTodoItem("Go home"),
      this.createTodoItem("Clear teeth")
    ],
    important: false,
    done: false
  };

  createTodoItem(value) {
    return {
      value,
      important: false,
      done: false,
      id: this.randomId++
    };
  }

  deleteItem = id => {
    this.setState(({ todos }) => {
      const index = todos.findIndex(el => el.id === id);
      const newArray = [...todos.slice(0, index), ...todos.slice(index + 1)];
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
        todos: this.toggleProperty(todos, id, "done")
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, "important")
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
  render() {
    const { todos } = this.state;
    const doneCount = todos.filter(el => el.done).length;
    const todoCount = todos.length - doneCount;

    return (
      <div className="App">
        <div className="container">
          <Header todo={todoCount} done={doneCount} />
          <Filter />
          <TodoList
            todos={todos}
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
