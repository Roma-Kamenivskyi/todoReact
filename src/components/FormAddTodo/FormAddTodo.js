import React from "react";
import "./FormAddTodo.css";

const FormAddTodo = ({ onTodoItemAdded, onChange }) => {
  return (
    <form
      className="input-group mt-4"
      onSubmit={onTodoItemAdded}
      onChange={onChange}
    >
      <input
        className="form-control input-add-task"
        type="text"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default FormAddTodo;
