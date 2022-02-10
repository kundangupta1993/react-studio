import React from "react";
import Background from '../images/istock-woman-relaxing.png';

function MainBanner(){
    return(
        <>
            <div className="banner" style={{ backgroundImage: `url(${Background})` }}>
            </div>
        </>        
    )
}

export default MainBanner;