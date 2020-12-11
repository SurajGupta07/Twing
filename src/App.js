import React, { useState } from "react";
import "./styles.css";

var color = "blue";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var emojisAvailable = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, userMeaning] = useState("");

  function inputHandler() {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "No value found in our database";
    }
    userMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    userMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ color: color }}> Twing </span>
      </h1>
      <input onChange={inputHandler} />
      <h2> {meaning} </h2>
      <h3> Emoji Collection </h3>
      {emojisAvailable.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
