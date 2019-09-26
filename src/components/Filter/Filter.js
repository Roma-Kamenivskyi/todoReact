import React from "react";
import ItemStatusFilter from "../ItemStatusFilter";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="row">
      <input type="text" placeholder="Search todos" className="form-control" />
      <ItemStatusFilter />
    </div>
  );
};

export default Filter;
