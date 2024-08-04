import React from 'react';
import '../styles.css';

const Header: React.FC = () => {
  return (
    <header>
      <a href="/">
        <p className="nav-title">Tom Page</p>
      </a>
      {/* <nav>
        <a href="/">Home</a>
        <a href="/books">Books</a>
      </nav> */}
    </header>
  );
};

export default Header;
