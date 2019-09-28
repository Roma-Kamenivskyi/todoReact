import React, { Component } from "react";
import "./FormAddTodo.css";

class FormAddTodo extends Component {
  state = {
    text: ""
  };

  onChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  onAddTodoItem = event => {
    event.preventDefault();
    this.props.onTodoItemAdded(this.state.text);
  };

  render() {
    const { onTodoItemAdded, onChange } = this.props;
    return (
      <form
        className="input-group mt-4"
        onSubmit={this.onAddTodoItem}
        onChange={this.onChange}
      >
        <input
          className="form-control input-add-task"
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}

export default FormAddTodo;
