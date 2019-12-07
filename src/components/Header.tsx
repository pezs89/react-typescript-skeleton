import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <div className="header__left-menu">
          <Link to="/">Streamer</Link>
        </div>
        <div className="header__right_menu">
          <Link to="/">All streams</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;