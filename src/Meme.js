import React from "react";
import memesData from "./memesData.js";
let url;

function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1jwhww.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  // const [result, setResult] = React.useState("hello");
  // const [newImage, setNewImage] = React.useState(getMemeImage);

  // function buttonRefresh() {
  //   setNewImage(getMemeImage);
  // }
  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randomMeme = Math.trunc(Math.random() * memeArray.length);
    const url = memeArray[randomMeme].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div className="meme">
      <div className="inputs">
        <input
          type="text"
          name="topText"
          className="input"
          value={meme.topText}
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          className="input"
          placeholder="Botton text"
          onChange={handleChange}
        />
      </div>
      <button onClick={getMemeImage} className="btn-meme">
        Get a new meme image
      </button>
      <div className="meme">
        <img className="img-pic" src={meme.randomImage} alt="" />
        <h1 className="meme--text top">{meme.topText}</h1>
        <h1 className="meme--text bottom">{meme.bottomText}</h1>
      </div>
    </div>
  );
}

export default Meme;
