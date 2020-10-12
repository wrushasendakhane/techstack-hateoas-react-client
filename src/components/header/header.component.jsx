import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/" className="navbar-brand" onClick={handleNavCollapse}>
        TechStack
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarColor01"
      >
        <ul className="navbar-nav mr-auto">
          <li>
            <Link
              className="nav-item nav-link"
              to="/dashboard"
              onClick={handleNavCollapse}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
