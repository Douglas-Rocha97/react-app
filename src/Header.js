import React from 'react';
import Menu from './Menu'
import "./App.css";

function Header(params) {
  return (
    <header className="header">
      <h1>{params.name}</h1>
      <Menu links={params.links}></Menu>
    </header>
  );
}

export default Header
