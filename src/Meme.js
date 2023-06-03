import React from "react";
import memesData from "./memesData.js";
let url;

function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
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

  return (
    <div className="meme">
      <div className="inputs">
        <input type="text" className="input" placeholder="Top text" />
        <input type="text" className="input" placeholder="Botton text" />
      </div>
      <button onClick={getMemeImage} className="btn-meme">
        Get a new meme image
      </button>

      <img className="img-pic" src={meme.randomImage} alt="" />
    </div>
  );
}

export default Meme;

// function greeting(name) {
//   const date = new Date();
//   const hours = date.getHours();

//   let timeOfDay;

//   if (hours >= 4 && hours <= 12) {
//     timeOfDay = "morning";
//   } else if (hours >= 12 && hours <= 17) {
//     timeOfDay = "afternoon";
//   } else if (hours >= 17 && hours <= 20) {
//     timeOfDay = "evening";
//   } else if (hours >= 20 && hours <= 4) {
//     timeOfDay = "night";
//   }
//   return console.log(hours);
// }

// greeting("Boob");
