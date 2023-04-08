import React from "react";
import { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    if (activeLink !== link) {
      setActiveLink(link);
    }
  };
  return (
    <nav>
      <ul className="navbar-wrapped">
        <li>
          <NavLink
            to="/"
            className={
              activeLink === "blog"
                ? "active nav ul nav-link "
                : "nav ul nav-link"
            }
            onClick={() => handleLinkClick("blog")}
          >
            Blog
          </NavLink>
        </li>
        <li className="signup">
          <NavLink
            to="signup"
            className={
              activeLink === "signup"
                ? "active nav ul nav-link"
                : "nav ul nav-link"
            }
            onClick={() => handleLinkClick("signup")}
          >
            Sign up
          </NavLink>
        </li>
        <li className="login">
          <NavLink
            exact
            to="login"
            className={
              activeLink === "login"
                ? "active nav ul nav-link"
                : "nav ul nav-link"
            }
            onClick={() => handleLinkClick("login")}
          >
            Login
          </NavLink>
        </li>
        <li className="table">
          <NavLink
            exact
            to="table"
            className={
              activeLink === "table"
                ? "active nav ul nav-link"
                : "nav ul nav-link"
            }
            onClick={() => handleLinkClick("table")}
          >
            Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
