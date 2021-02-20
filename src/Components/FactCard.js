import React from "react";
import "./FactCard.css";
function FactCard({ name, handleChange, onclick, fact }) {
  return (
    <div className="area">
      <h1>{name.toUpperCase()} Facts</h1>
      <input
        name={name}
        placeholder="Enter Any Number"
        className="inputNumber"
        type="number"
        onChange={handleChange}
      />
      <button className="getFactButton" onClick={onclick}>
        Get Fact
      </button>
      <p className="factText">{fact}</p>
    </div>
  );
}

export default FactCard;
