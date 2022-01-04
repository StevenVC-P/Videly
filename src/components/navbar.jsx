import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
        <div className="collapse nav-bar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/movies">
                    Movie
                </NavLink>
                <NavLink className="nav-item nav-link" to="/customers">
                    Customers
                </NavLink>
                <NavLink className="nav-item nav-link" to="/Rentals">
                    Rentals
                </NavLink>
            </div>
        </div>
    </nav>

  );
};

export default NavBar;
