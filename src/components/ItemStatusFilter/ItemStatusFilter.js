import React from 'react';
import './ItemStatusFilter.css';

const ItemStatusFilter = ({ todos, onActive }) => {
  console.log(todos);

  return (
    <div className='input-group-append'>
      <button type='button' className='btn btn-info'>
        All
      </button>
      <button
        type='button'
        className='btn btn-outline-primary'
        onClick={onActive}
      >
        Active
      </button>
      <button type='button' className='btn btn-outline-primary'>
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
