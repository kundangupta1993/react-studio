import React from 'react';
import Logo1 from '../images/cartus_logo_blue.png';
import Logo2 from '../images/dwl_logo_rgb_rectangle.png';

function Logo(){
    return(
        <>
            <div className="logo">
                <div className="dwell-logo">
                    <img src={Logo2} alt="CARTUS Logo BLUE" />
                </div>
                <div className="dwell-logo">
                    <img src={Logo1} alt="CARTUS Logo BLUE" />
                </div>
            </div>
        </>
    )
}

export default Logo;