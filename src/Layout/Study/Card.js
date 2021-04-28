import { useState } from "react";
import { useHistory } from "react-router-dom";

const Card = ({ card, view, setView }) => {



function flipHandler() {
  if (view === "back") {
  setView("front");
  }
  else {
    setView("back");
  }
}



    return (
      <div>
        <p className="card-text">{card[view]}</p>
        <button onClick={flipHandler}>Flip</button>
        </div>
      );
}
 
export default Card;