import React from 'react';
import classnames from 'classnames';

import './FilterTabs.css';

const FilterTabs = ({ onFilterChange, filter }) => {
  const tabs = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'done', label: 'done' }
  ];

  const renderTabs = tabs.map(({ value, label }) => {
    const isActive = filter === value;

    const classes = classnames('btn', {
      'btn-primary': isActive,
      'btn-outline-primary': !isActive
    });

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

  return <div className='input-group-append'>{renderTabs}</div>;
};

export default FilterTabs;
