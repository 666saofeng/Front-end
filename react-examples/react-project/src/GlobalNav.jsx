import menu from "./menu.js";

import "./GlobalNav.css";

import { useState } from "react";

function GlobalNav({ className,onNav }) {
  const [showMenu, setShowMenu] = useState(false);

  const list = menu.map((item) => {
    return (
      <li className="global-nav__item" key={item.name}>
        <a className="global-nav__link" href={item.path}
            onClick ={onNav}>
          {item.name}
        </a>
      </li>
    );
  });

  const menuHtml =(
    <nav className={`global-nav ${className}`}>
    <ul className="global-nav__list">{list}</ul>
  </nav>
  );


  return (
    <>
      <button 
      onClick={() => {
        setShowMenu(!showMenu)
      }}
      > {showMenu ? "Close Menu":"Open Menu"}</button>
    {showMenu && menuHtml}
    </>
  );
}

export default GlobalNav;
