import React from "react";
import RadioAlbumData from "../component/RadioAlbum"

const Audioplayer = () => {

  return (
        <>      
            {/* <button className="player__button" onClick={}> Play Music</button> */}
            {/* <button className="prevMusic" onClick={PrevMusic}> prev </button>
            <button className="playMusic" onClick={playMusic}> play</button>
            <button className="pouseMusic" onClick={pouseMusic}> pouse </button>
            <button className="nextMusic" onClick={nextMusic}> next </button> */}
            <div className="player">
                <audio id="audio">
                    <source src="./song.mp3" />
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
        </>
  );
}

export default Audioplayer;
