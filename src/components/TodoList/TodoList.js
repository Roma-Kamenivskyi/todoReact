import React from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(item => {
    const { id } = item;
    return <TodoListItem {...item} key={id} onDeleted={() => onDeleted(id)} />;
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
