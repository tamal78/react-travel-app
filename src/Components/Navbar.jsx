import React from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbarItems">
      <h1 className="nav-logo">Trippy</h1>

      <div
        className="menu-icons"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={open ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
