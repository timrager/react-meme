import React from 'react';

const Meme = () => {

    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"    
                />
                <input
                    type="text"
                    placeholder="Button text"
                    className="form--input"
                />
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>
    )


}

export default Meme;