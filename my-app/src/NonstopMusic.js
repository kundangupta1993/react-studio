import React from "react";
import RadioAlbumData from "./component/RadioAlbum"
import AudioplayerControl from "./component/playerControl"
import NewAudioCard from './component/NewAudioCard';

const NonStopMusic = () => {

    return(
        <>      
            <AudioplayerControl />
            <div className="Musicwrapp">
                {RadioAlbumData.map((AudioCard, index) => {
                    return(
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
                    )
                })}

                
            </div>
        </>
    )
}

export default NonStopMusic;