import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import DeckCards from "./DeckCards";

const Deck = () => {

const { deckId } = useParams();

const history = useHistory();

const [deck, setDeck] = useState({cards: []})

/*
takes the :deckId parameter and sets the deck's state to a deck object
when the page loads
*/

useEffect(() => {
    async function getDeck(deckId) {
        const deckRead = await readDeck(deckId);
        setDeck(deckRead);
    }
    getDeck(deckId);
},[])    



//renders the Study, AddCard, or Edit page for the new deck depending on which button is clicked
function clickHandler({ target }) {
    if (target.id === "editButton") {
        history.push(`/decks/${deck.id}/edit`)
    }
    else if (target.id === "studyButton") {
    history.push(`/decks/${deck.id}/study`);
    }
    else if (target.id === "addButton") {
        history.push(`/decks/${deck.id}/cards/new`); 
    }
}

    return ( 
        <div>
            <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <Link onClick={clickHandler} id="editButton" type="button" className="btn btn-secondary">Edit</Link>
      <Link onClick={clickHandler} id="studyButton" type="button" className="btn btn-primary">Study</Link>
      <Link onClick={clickHandler} id="addButton"type="button" className="btn btn-primary">Add Cards</Link>
      <Link to="/" type="button" className="btn btn-danger">Delete</Link>
      <DeckCards deckId={deckId} deck={deck}/>
        </div>
     );
}
 
export default Deck;
