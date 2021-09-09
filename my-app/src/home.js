import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./nav";
import Footer from "./footer";
import HeroSection from "./slider"
import BlogBox from './blogcard';
import NonstopMusicCard from "./NonstopMusic"

const HomePage = () => {


    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <h1 className="text-center pt-3 pb-3"> Welcome Home Page </h1>
            
            
            <h1 className="text-start pt-3 pb-3"> Featured Tracks </h1>
            <NonstopMusicCard />

            <BlogBox/>
            <Footer/>
        </div>
    )

}

export default HomePage;