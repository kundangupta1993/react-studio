import React, {useState, useEffect} from "react";
import Player from "./player"
import PlayerDetails from "./playerDetails"
import chillHop from "../data";


console.log(chillHop)

const Library = () => {
    const[CurrentSongsIndex, SetCurrentSongsIndex] = useState(0);
    const[NextSongsIndex, SetNextSongsIndex] = useState(CurrentSongsIndex + 1);

    

    const music = document.querySelector('audio')
    const play = document.getElementById('play')

    // play.addEventListener('click', () => {
    //     music.play();
    //     play("Play Now", "Pouse");
    // })
    // useEffect(() => {
    //     SetNextSongsIndex(() => {
    //         if(CurrentSongsIndex + 1 > chillHop.length - 1){
    //             return 0;
    //         }else{
    //             return CurrentSongsIndex + 1
    //         }
    //     })
    // }, [CurrentSongsIndex])

	return (
		<>
        <h1 className="heading">Music Library</h1>
            <PlayerDetails
                name={chillHop[0].name}
                artist={chillHop[0].artist}
                songscover={chillHop[0].cover} 
                audio={chillHop[0].audio}        
            />
            <Player 
                CurrentSongsIndex={CurrentSongsIndex}
                NextSongsIndex={NextSongsIndex}
            />
        </>
	);
};
export default Library;
