import React, { useState, useEffect } from "react";


function Nav(){

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });    
    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('p');
        const test = document.querySelector('.navbar');
        const scrollTop = header.offsetTop;
        // scrollTop >= 750 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        function myFunction() {
            if (window.pageYOffset > scrollTop) {
                test.classList.add("sticky");
            } else {
                test.classList.remove("sticky");
            }
        
        }
        window.onscroll = function() {myFunction()};
    };

    return(
        <>
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li>
                        <a href="html.html"> Home </a>
                    </li>
                    <li>
                        <a href="html.html"> FAQ Resources</a>
                    </li>
                    <li>
                        <a href="html.html"> About </a>
                    </li>
                    <li>
                        <a href="html.html"> Contact </a>
                    </li>
                    <li>
                        <a href="html.html"> Market Rates </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;