import React from 'react';
import { Link } from 'react-router-dom';
import GAuth from './GAuth';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <div className="header__left-menu">
          <Link to="/">Streamer</Link>
        </div>
        <div className="header__right-menu">
          <div>
            <Link to="/">All streams</Link>
          </div>
          <div><GAuth></GAuth></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;