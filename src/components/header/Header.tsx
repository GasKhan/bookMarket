import React from 'react';
import classes from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">Books</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
    </header>
  );
};

export default Header;
