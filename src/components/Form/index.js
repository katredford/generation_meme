import React from "react";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomeText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })


  function fetchMeme() {
    fetch('https://api.imgflip.com/get_memes')
      .then(function (response) {
        return response.json();
      })
      .then(function (returned) {
        console.log(returned)
        const meme = returned.data.memes
        const randomInt = Math.floor(Math.random() * meme.length)
        const url = meme[randomInt].url
        console.log(url, "this is the random stuff")
        setMeme(prevMeme => {
          return {
            ...prevMeme,
            randomImg: url
          }
        })
      })
  }
  return (
      <div>
    <main>
            <div className="form">
                <input 
                type="text"
                className="fInput"
                placeholder="Top text"
                 />
                <input 
                type="text"
                className="fInput"
                placeholder="Bottom text"
                 />
          <button onClick={fetchMeme} className="submit-btn">Create Meme</button>
        </div>
        <img src={meme.randomImg} className="meme-Img" alt=""/>
        </main>
  </div>
  )
}