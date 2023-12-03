import React from "react";
import "../Css/DisplayItems.css";

const DisplayItem = ({ ele }) => {
  console.log("item");

  return (
    <div className="display-item">
      <h1>{ele.word}</h1>
      <p>{ele.phonetic}</p>

      {ele.phonetics.map((audioItem, i) => {
        return (
          <div className="audio-container" key={i}>
            <p>{audioItem.text}</p>
            <audio src={audioItem.audio} controls />
          </div>
        );
      })}

      {ele.meanings.map((item, i) => {
        return (
          <div>
            <h2>{item.partOfSpeech}</h2>
            {item.definitions.map((def, defIndex) => {
              return (
                <div className="defination">
                  <p >{def.definition}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayItem;
