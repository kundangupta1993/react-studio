import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./nav";
import HeroSection from "./slider"

const HomePage = () => {


    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <h1> Welcome Home Page </h1>
        </div>
    )

}

export default HomePage;