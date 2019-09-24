import React from "react";

const Form = ({ onSubmit, onChange }) => {
  return (
    <form className="input-group mt-4" onSubmit={onSubmit} onChange={onChange}>
      <input
        className="form-control"
        type="text"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default Form;
