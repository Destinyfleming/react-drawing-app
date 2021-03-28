import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();
  
    return (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/drawing" className={location.pathname === "/drawing" ? "nav-link active" : "nav-link"}>
            Drawing
          </Link>
        </li>
        </ul>
    )}

export default NavTabs;