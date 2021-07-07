import React from "react";
import logo from './logo.png';
import ReactDOM from 'react-dom';
import './style.css';

const NavBar = () => {

    return (
        <div>
            <header className="header boxs fixedheader">
                <div className="container">
                    <div className="logo"> <img className="img-responsive" src={logo} alt="logo"/></div>
                    <div className="navigation">
                        <ul className="nav">
                            <li> <a href="/"> Home </a></li>
                            <li> <a href="/"> About Us </a></li>
                            <li> <a href="/"> How its work </a></li>
                            <li> <a href="/"> About </a></li>
                            <li> <a href="/"> Services </a></li>
                            <li> <a href="/"> Contact </a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default NavBar; 
