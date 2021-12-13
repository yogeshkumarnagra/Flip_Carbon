import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1>UNX</h1>
      <div id="links">
        <p>Products</p>
        <p>About</p>
        <p>Resources</p>
        <p>Contact</p>
      </div>
      <button id="dash_btn">Dashboard</button>
    </div>
  );
}

export default Navbar;
