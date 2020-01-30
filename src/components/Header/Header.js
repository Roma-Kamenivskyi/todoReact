import React from 'react';
import './Header.css';

const Header = ({ todo, done }) => (
  <header className='header'>
    <h1 className='App-header mb-4'>todo app</h1>
    <span className='tasks-info text-muted'>
      {todo} more todo, {done} Done
    </span>
  </header>
);

export default Header;
