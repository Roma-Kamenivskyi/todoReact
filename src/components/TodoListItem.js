import React, { Fragment } from "react";
import "./TodoListItem.css";

const TodoListItem = ({ value, important }) => {
  const itemStyle = {
    color: important ? "#1B9A65" : "black",
    fontWeight: important ? "bold" : "normal"
  };
  return (
    <Fragment>
      <li className="list-group-item todo-list-item" style={itemStyle}>
        <span className="todo-list-item-label">{value}</span>
        <div>
          <button type="button" className="btn btn-outline-danger">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          <button type="button" className="btn btn-outline-info ml-2">
            <i className="fa fa-exclamation" aria-hidden="true"></i>
          </button>
        </div>
      </li>
    </Fragment>
  );
};

TodoListItem.defaultProps = {
  important: false
};

export default TodoListItem;
