import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Tom Page</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/books">Books</a>
      </nav>
    </header>
  );
};

export default Header;
