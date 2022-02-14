import React from 'react';
import './Home.css';
import { Brand } from './Logo';
import { Menu } from './Menu';

function Nevbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Brand />
        <Menu />
      </div>
    </nav>
    </>
  )
}

export default Nevbar