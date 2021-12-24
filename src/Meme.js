import React, {useState} from 'react';
import memesData from './memesData';

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMeme = () => {

        let randomMeme = allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)];

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: randomMeme.url
            }
        })

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
                <img src={meme.randomImage} className="meme--image" />
            </div>
        </main>
    )


}

export default Meme;