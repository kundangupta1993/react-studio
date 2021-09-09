import React, { useState } from 'react';

const MusicCard = (props) => {
    return (

        <div className="col col-ms-12 col-md-6 col-lg-6 mb-5">
            <div className="musicCard">
                <div className="featured-img">
                    <img src={props.image} alt="" />
                </div>
                <h3> {props.title} </h3>
                <p> {props.description} </p>
                <a href={props.url}> Read More </a>
            </div>
        </div>

    );
}



export default MusicCard;