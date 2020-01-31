import React, { Component } from 'react';
import './AddTodoForm.css';

class AddTodoForm extends Component {
  state = {
    text: ''
  };

  onChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  onAddTodoItem = event => {
    event.preventDefault();
    if (this.state.text.trim() === '') {
      return;
    }
    this.props.onTodoItemAdded(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { onTodoItemAdded, onChange } = this.props;
    return (
      <form className='input-group mt-4' onSubmit={this.onAddTodoItem}>
        <input
          className='form-control input-add-task'
          type='text'
          placeholder='What needs to be done?'
          onChange={this.onChange}
          value={this.state.text}
        />
        <div className='input-group-append'>
          <button className='btn btn-primary'>Add</button>
        </div>
      </form>
    );
  }
}

export default AddTodoForm;
