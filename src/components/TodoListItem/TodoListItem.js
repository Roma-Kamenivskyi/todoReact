import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({
  value,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  important,
  done
}) => {
  let classNames = 'todo-list-item-label';

  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }

  return (
    <li className='list-group-item todo-list-item'>
      <span className={classNames} onClick={onToggleDone}>
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
