import React from "react";
import ReactDOM from 'react-dom';
import MusicCard from './musiccard';
import musicData from "./component/musicData"


const BlogBox = () => {
    return (
        <div>
            <div className="container">
                <div className="row pb-5">
                    {musicData.map((val, index) => {
                        return(
                        <MusicCard 
                            key={val.id}
                            image={val.image}
                            title={val.title}
                            description={val.description}
                            url={val.url}
                        />
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default BlogBox;