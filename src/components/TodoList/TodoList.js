import React from "react";
import TodoListItem from "../TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    return <TodoListItem {...item} key={item.id} />;
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
