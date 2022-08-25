import React from "react";

export default function Form() {
  // function handleClick() {
  //   console.log("clicked")
  // }
  function fetchMeme(){
    fetch('https://api.imgflip.com/get_memes')
      .then(function (response) {
        return response.json();
      })
      .then(function (returned) {
        console.log(returned)
        const meme = returned.data.memes
        // for (let i = 0; 1 < data.memes; i++){
        //   console.log(data.memes[i], "beep beep beep")
        // }
        console.log(meme[0].url, "meme meme meme")
        const randomInt = Math.floor(Math.random() * meme.length)
        console.log(randomInt)
        const url = meme[randomInt].url
        console.log(url, "this is the random stuff")
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
        </main>
  </div>
  )
}