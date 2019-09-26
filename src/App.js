import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AppHeader from "./components/AppHeader";
import Form from "./components/Form";
import Filter from "./components/Filter";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { value: "Eat", important: true, id: "1" },
      { value: "Go home", important: false, id: "2" }
    ],
    text: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    this.setState({
      todos: event.target.value
    });
  };
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <AppHeader />
          <Filter />
          <TodoList todos={this.state.todos} />
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default App;
