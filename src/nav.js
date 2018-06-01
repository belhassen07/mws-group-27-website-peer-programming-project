import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Andela.jpg';
const NavBar = () => (
  <nav>
    <ol>
      <li>
        <img src={logo} className="logo" />
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contributors">contributors</Link>
      </li>
    </ol>
  </nav>
);
export default NavBar;
