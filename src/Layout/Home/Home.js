import { useState } from "react";
import { Link } from "react-router-dom";
import Decks from "./Decks"



const Home = () => {
  const [decks, setDecks] = useState([]);


 

  return (
    <div>
      <Link to="decks/new">
      <button
        type="button"
        className="btn btn-secondary"
        style={{ margin: "0 0 1rem 0" }}
      >
        Create Deck
      </button>
      </Link>
      <div className="card-body">
    <Decks setDecks={setDecks} decks={decks}/>
     
    </div>
    </div>
  );
};

export default Home;
