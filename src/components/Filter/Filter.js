import React, { Component } from 'react';
import ItemStatusFilter from '../ItemStatusFilter';
import './Filter.css';

class Filter extends Component {
  state = {
    value: ''
  };
  onChange = ({ target: { value } }) => {
    this.setState({ value });
    this.props.onSearch(value);
  };

  render() {
    return (
      <div className='row'>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Search todos'
            className='form-control'
            value={this.state.value}
            onChange={this.onChange}
          />
          <ItemStatusFilter {...this.props} />
        </div>
      </div>
    );
  }
}

export default Filter;
