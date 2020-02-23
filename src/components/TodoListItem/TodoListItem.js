import React from 'react';
import classnames from 'classnames';

import './TodoListItem.css';

const TodoListItem = ({
  value,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  important,
  done
}) => {
  const classes = classnames('todo-list-item-label', {
    done: done,
    important: important
  });

  return (
    <li className='list-group-item todo-list-item'>
      <span className={classes} onClick={onToggleDone}>
        {value}
      </span>
      <div>
        <button
          type='button'
          className='btn btn-outline-danger'
          onClick={onDeleted}
        >
          <i className='fa fa-trash' aria-hidden='true'></i>
        </button>
        <button
          type='button'
          className='btn btn-outline-info ml-2'
          onClick={onToggleImportant}
        >
          <i className='fa fa-exclamation' aria-hidden='true'></i>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
