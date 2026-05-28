import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Phoenix Airlines</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/flight-search">Search Flights</Link>
      </div>
    </nav>
  );
}

export default Navbar;