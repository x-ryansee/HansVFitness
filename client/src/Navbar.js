import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <a href="/">Hans's Logo</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/login">Log In</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
