import React from "react";

import { useEffect } from "react";
// let url;

function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMeme, setAllMeme] = React.useState([]);
  // const [result, setResult] = React.useState("hello");
  // const [newImage, setNewImage] = React.useState(getMemeImage);

  // function buttonRefresh() {
  //   setNewImage(getMemeImage);
  // }
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);
  console.log(allMeme);

  function getMemeImage() {
    const randomMeme = Math.trunc(Math.random() * allMeme.length);
    const url = allMeme[randomMeme].url;
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
