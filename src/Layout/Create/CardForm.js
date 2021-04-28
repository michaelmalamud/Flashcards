import React, { useEffect } from "react";
import { useState } from "react";
import { createCard, updateCard, readCard } from "../../utils/api";
import { useHistory } from "react-router-dom";

const CardForm = ({deckId, deck, cardId}) => {

const history = useHistory();

const [card, setCard] = useState({front: "", 
                                  back: ""})


useEffect(() => {
    async function getCard() {
if (cardId) {
    const newCard = await readCard(cardId);
    setCard(newCard)
}
}
getCard();
},[cardId]) 



function frontChangeHandler({ target: { value } }){ 
    setCard({...card, front: value})
}

function backChangeHandler({ target: {value } }){
    setCard({...card, back: value})
}

function submitHandler() {
    if (cardId) {
        updateCard(card)
    }
    else {
    createCard(deckId, card)
    }
}
 
function clickHandler(){
    history.push(`/decks/${deck.id}`)
}


    return (  
        <div>
            <form 
            onSubmit={submitHandler}
            >
                <label htmlFor="name">Front</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={card.front}
                    rows="3"
                    placeholder="Front side of card"
                    onChange={frontChangeHandler}
                ></textarea>
                    <label htmlFor="name">Back</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={card.back}
                        rows="3"
                        placeholder="Back side of card"
                        onChange={backChangeHandler}
                    ></textarea>
<button
//  onClick={cancelHandler}
  type="button" className="btn btn-secondary" onClick={clickHandler}>Done</button>
            <button type="submit" className="btn btn-primary">Save</button>
             </form>
        </div>

    );
}

 
export default CardForm;