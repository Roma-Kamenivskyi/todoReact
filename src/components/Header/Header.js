import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="App-header mb-4">My todo app</h1>
      <span className="tasks-info text-muted">1 more todo, 3 Done</span>
    </header>
  );
};

export default Header;
