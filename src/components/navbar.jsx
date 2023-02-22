import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function navbar() {
  return (
    <nav>
      <header>Math Magicians</header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  );
}
