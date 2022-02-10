import React from "react";
// import {FontAwesomeIcon} from "@fortawesome/reactfontawesome";
// import { faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

const Player = () => {

    return(
        <>
            <div className="audio-player">
                <button className="btn btn-primary" id="prev">Prev</button>
                <button className="btn btn-primary main-btn" id="play">Play Now</button>
                <button className="btn btn-primary" id="next">Next</button>
            </div>
        </>
    )

}


export default Player;