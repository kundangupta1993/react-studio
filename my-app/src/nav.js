import React from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './style.css';

const NavBar = () => {

    return (
        <div>
            <header className="header boxs fixedheader">
                <div className="container">
                    <div className="logo"> <a href="/"> <img className="img-responsive" src={logo} alt="logo"/> </a> </div>
                    <div className="navigation">
                        <ul className="nav">
                            <li> <a href="/"> Home </a></li>
                            <li> <a href="/about"> About </a></li>
                            <li> <a href=""> How its work </a></li>
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
