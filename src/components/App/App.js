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
      { value: "Eat", important: false, id: 1 },
      { value: "Go home", important: false, id: 2 },
      { value: "Clear teeth", important: false, id: 3 }
    ],
    text: ""
  };

  addTodoItem = event => {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    this.setState(({ todos, text }) => {
      const newItem = {
        value: text,
        important: false,
        id: this.randomId++
      };
      const newArray = [...todos, newItem];
      return { todos: newArray, text: "" };
    });
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  deleteItem = id => {
    this.setState(({ todos }) => {
      const index = todos.findIndex(el => el.id === id);
      const newArray = [...todos.slice(0, index), ...todos.slice(index + 1)];
      return { todos: newArray };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Filter />
          <TodoList todos={todos} onDeleted={this.deleteItem} />
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
