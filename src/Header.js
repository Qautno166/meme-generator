import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <img className="pic" src="logo.png" alt="" />
        <ul className="nav-bar">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
