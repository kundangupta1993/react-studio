import React from "react";

const AllAudio = (props) => {
  const currentMusic = props.releaseDate;
  console.log(currentMusic);

  return (
    <>
      <div className="musicbox">
        <div className="albumarimg">
          <img src={props.artistimg} alt="" />
        </div>
        <div className="albumartist">
          <p>{props.kay}</p>
          <h3>{props.artistName}</h3>
          <p>{props.title}</p>
          <p>
            <span>{props.releaseDate}</span>
          </p>
          <p>{props.collectionViewUrl}</p>
        </div>
      </div>
    </>
  );
};

export default AllAudio;
