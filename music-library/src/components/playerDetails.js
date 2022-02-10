import React from "react";

const playerDetails = (props) => {

    return(
        <>
            <div className="musicLibrary">
                <div className="User-img">
                    <img src={props.songscover} alt={props.songscover} /> 
                </div>
                <audio src={props.audio} type="audio/mp3"> </audio>
                <h3>{props.name}</h3>
                <p>{props.artist}</p>
            </div>
        </>
    )

}


export default playerDetails;