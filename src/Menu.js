import React from "react";

function Menu(params) {
  return (
    <ul className="menu">
      {params.links.map((link, index) => {
        return (
          <li key={index}>{link}</li> )
      })}
    </ul>
  );
}

export default Menu;
