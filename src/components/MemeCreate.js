import React from "react";
import data from "../data/data"

export default function MemeCreate() {
    const [meme, setMeme] = React.useState({
        randomImage: data.data.memes[Math.round(Math.random() * 100)].url,
        topText: "",
        bottomText: ""
    });

    const [allMemeImages, setAllMemeImages] = React.useState(data);
    
    function setMemeImage() {
        setMeme(meme => {
            return {
                ...meme, // TODO
                randomImage: data.data.memes[Math.round(Math.random() * 100)].url
            }
        }) 
    }  

    return (
        <div className="form">
            <img src={meme.randomImage} className="form--image"/>
            <input 
                type="text" 
                className="form--input"
                placeholder="Oben: "
            />
            <input 
                type="text" 
                className="form--input"
                placeholder="Unten: "
            />
            <button 
                type="submit"
                className="form--button"
                onClick={setMemeImage}>
                    Create new Meme 
            </button>
        </div>
    )
}

