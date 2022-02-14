import React from 'react'
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
             <NavLink exact to="/" activeClassName='active' className="nav-link">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" activeClassName='active' className="nav-link">ABOUT</NavLink>              
            </li>
            <li className="nav-item">
              <NavLink exact to="/services" activeClassName='active' className="nav-link">SERVICES</NavLink> 
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" activeClassName='active' className="nav-link">CONTACT</NavLink> 
            </li>
          </ul>
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="navbar-btn btn btn-sm btn-primary lift ms-auto" href="/" target="_blank"> Buy now </a>
            </li>
          </ul>
        </div>
    </>
  )
}
