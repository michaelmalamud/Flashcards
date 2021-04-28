import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listCards } from "../../utils/api";
import NotEnoughCards from "./NotEnoughCards";
import Card from "./Card"

function Cards({ deckId, deckInfo}) {

  const history = useHistory();

  // const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState(0);
  const [view, setView] = useState("front");





  // useEffect(() => {
  //   async function cardsList() {
  //     const list = await listCards(deckId);
  //     setCards(list);
  //   }
  //   cardsList();
  // }, [cards]);

  const cards = deckInfo.cards;

  if (cards.length < 3) {
    return <NotEnoughCards cards={cards} deckInfo={deckInfo}/>
  }

  const formattedCards = cards.map((card, index) => (
    
      <div className="card" style={{ width: "50rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            Card {index + 1} of {cards.length}
          </h5>
            <Card card={card} cards={cards} view={view} setView={setView} setCardNumber={setCardNumber}/>
          {view === "back" ? 
          <button onClick={nextHandler}>Next</button>
          : null
        }
        </div>
        </div>
  ));

  function nextHandler() {
    if (cardNumber < cards.length - 1) {
      setCardNumber(cardNumber + 1);
      setView("front");
    }
    else {
      const restart = window.confirm("Restart cards?")
      if (!restart) {
       history.push("/")
      } else {
        setCardNumber(0);
        setView("front");
        }
      }
    }

  return (
    <div>
      {formattedCards[cardNumber]}
    </div>
  );
}

export default Cards;
