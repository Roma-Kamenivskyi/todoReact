import React from 'react';
import './FilterTabs.css';

const FilterTabs = ({ onFilterChange, filter }) => {
  const buttons = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'done', label: 'done' }
  ];

  const tabs = buttons.map(({ value, label }) => {
    const isActive = filter === value;
    const classes = `btn btn-${isActive ? 'primary' : 'outline-primary'}`;

    return (
      <button
        type='button'
        className={classes}
        onClick={() => onFilterChange(value)}
        key={value}
      >
        {label}
      </button>
    );
  });

  return <div className='input-group-append'>{tabs}</div>;
};

export default FilterTabs;
