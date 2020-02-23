import React from 'react';

import './SearchPanel.css';

const SearchPanel = ({ onSearch, children }) => (
  <div className='row'>
    <div className='input-group'>
      <input
        type='text'
        placeholder='Search todos'
        className='form-control'
        onChange={e => onSearch(e.target.value)}
      />
      {children}
    </div>
  </div>
);

export default SearchPanel;
