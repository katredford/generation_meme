import React from "react";

export default function Form() {
  const [memeImg, setMemeImg] = React.useState("")


  function fetchMeme(){
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
        setMemeImg(url)
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
        <img src={memeImg} className="meme-Img" />
        </main>
  </div>
  )
}