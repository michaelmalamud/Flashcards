import { deleteCard, listCards } from "../../utils/api"
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import React from "react";

const DeckCards = ({ deckId, deck}) => {

const history = useHistory();

// const [cards, setCards] = useState([])

// useEffect(() => {
// async function getCards(deckId) {
// const cardsList = await listCards(deckId);
// setCards(cardsList)
// }
// getCards(deckId);
// },[])

const cards = deck.cards;


async function handleDelete(e) {
  const cardDelete = window.confirm("Delete this card? You will not be able to recover it.")
  if (cardDelete) {
    await deleteCard(e.target.value);
    window.location.reload();
  }
}

function editHandler(e){
  history.push(`/decks/${deckId}/cards/${e.target.value}/edit`)
}
  

const formattedCards = cards.map((card) => (
        <div>
    <div className="card" style={{width: "55rem" }}>
    <div className="card-body">
      <div className="row">
        <div className="col">
      <p className="card-text">{card.front}</p>
      </div>
      <div className="col">
      <p className="card-text">{card.back}</p>
      </div>
      </div>
      <div className="row justify-content-end">
      <button onClick={editHandler} type="button" className="btn btn-secondary" value={card.id}>Edit</button>
      <button onClick={handleDelete} type="button" className="btn btn-danger" value={card.id}>Delete</button>
      </div>
    </div>
  </div>
  </div>
))


    return ( 
            <div>
                {formattedCards}
            </div>
     );
}

 
export default DeckCards;