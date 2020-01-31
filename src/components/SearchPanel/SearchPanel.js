import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
  render() {
    return (
      <div className='row'>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Search todos'
            className='form-control'
            onChange={e => this.props.onSearch(e.target.value)}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SearchPanel;
