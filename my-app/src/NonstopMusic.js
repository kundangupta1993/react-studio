import React, { useState } from "react";
import RadioAlbumData from "./component/RadioAlbum";
// import AudioplayerControl from "./component/playerControl";
import NewAudioCard from "./component/NewAudioCard";

const NonStopMusic = (tracks) => {
  const state = useState();

  const [NewMusic, SetNewMusic] = useState(0);
  const Play = () => {
    SetNewMusic = 2;
  };

  return (
    <>
      <div className="player">
        <audio id="audio" controls>
          <source src={NewMusic} type="audio/ogg" />
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
      <button className="player__button" onClick={Play}>
        Play Music
      </button>

      {/* <AudioplayerControl /> */}
      <div className="Musicwrapp">
        {RadioAlbumData.map((AudioCard, index) => {
          return (
            <>
              <NewAudioCard
                key={AudioCard.artistId}
                artistimg={AudioCard.artworkUrl100}
                artistName={AudioCard.artistName}
                title={AudioCard.primaryGenreName}
                releaseDate={AudioCard.releaseDate}
                collectionViewUrl={AudioCard.collectionViewUrl}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default NonStopMusic;
