import React from "react";
import "./App.css";

function Header(params) {
  return (
    <header className="header">
      <h1>{params.name}</h1>
      <ul className="menu">
        <li>{params.links[0]}</li>
        <li>{params.links[1]}</li>
        <li>{params.links[2]}</li>
      </ul>
    </header>
  );
}

export default Header
