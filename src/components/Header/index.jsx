import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const textDecoration = {
  textDecoration: "none"
}

const Header = () => (
  <header className="Header">
    <Link style={textDecoration} className="Home" to="/">Home</Link>
    
    <Link style={textDecoration} className="Employee" to="/employees/new">Adicionar funcionário</Link>
  </header>
)

export default Header;