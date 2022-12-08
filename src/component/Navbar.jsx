import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbar = {
    listStyle: "none",
    style: "none",
    textDecoration: "none",
    outline: "0",
    border: "0",
  };

  const actBehave = {
    color: "red",
    listStyle: "none",
    style: "none",
    textDecoration: "none",
    outline: "0",
    border: "0",
  };

  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => (isActive ? actBehave : navbar)}>
        HOME PAGE
      </NavLink>
      <NavLink
        to="photos"
        style={({ isActive }) => (isActive ? actBehave : navbar)}
      >
        PHOTOS
      </NavLink>
      <NavLink
        to="todos"
        style={({ isActive }) => (isActive ? actBehave : navbar)}
      >
        TODOS
      </NavLink>
      <NavLink
        to="users"
        style={({ isActive }) => (isActive ? actBehave : navbar)}
      >
        USERS
      </NavLink>
    </nav>
  );
};

export default Navbar;
