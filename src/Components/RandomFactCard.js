import React, { useState } from "react";
import "./RandomFactCard.css";


function RandomFactCard({ onclick, fact }) {
  const [type, setType] = useState("Math");
  const [styleMath, setStyleMath] = useState({
    margin: "10px",
    color: "blue",
    backgroundColor: "yellow",
    border: "3px solid red",
    borderRadius: "10px",
  });
  const [styleTrivia, setStyleTrivia] = useState({
    margin: "10px",
    color: "red",
  });

  // For handeling click in random card
  function handleClick(event) {
    if (event.target.name == "math") {
      setType("Math");
      setStyleMath({
        margin: "10px",
        color: "blue",
        backgroundColor: "yellow",
        border: "3px solid red",
        borderRadius: "10px",
      });
      setStyleTrivia({
        margin: "10px",
        color: "red",
      });
    }
    if (event.target.name == "trivia") {
      setType("Trivia");
      setStyleTrivia({
        margin: "10px",
        color: "blue",
        backgroundColor: "yellow",
        border: "3px solid red",
        borderRadius: "10px",
      });
      setStyleMath({
        margin: "10px",
        color: "red",
      });
    }
  }
  return (
    <div className="randomFact">
      <h1>Random</h1>
      <ul>
        <li onClick={handleClick} style={styleMath}>
          <a name="math">Math</a>
        </li>
        <li onClick={handleClick} style={styleTrivia}>
          <a name="trivia">Trivia</a>
        </li>
      </ul>
      <h2 className="type">Random {type} Fact</h2>
      <button className="getFact" name={"R" + type} onClick={onclick}>
        Get Fact
      </button>
      <p className="factText">{fact}</p>
    </div>
  );
}

export default RandomFactCard;
