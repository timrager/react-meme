import React, {useState} from 'react';
import memesData from './memesData';

const Meme = () => {

    const [memeImage, setMemeImage] = useState("");

    const getMeme = () => {

        let randomMeme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)];

        setMemeImage(randomMeme.url)

    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMeme}>
                    Get a new meme image 🖼
                </button>
                <img src={memeImage} className="meme--image" />
            </div>
        </main>
    )


}

export default Meme;