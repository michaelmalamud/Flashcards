import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import CardForm from "./CardForm";

const EditCard = () => {

    const [deck, setDeck] = useState({cards: []});

    const { deckId, cardId } = useParams();

    useEffect(() => {
        async function getDeck() {
            const deckData = await readDeck(deckId);
            setDeck(deckData);
        }
        getDeck();
    },[])


    return ( 
        <div>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                </ol>
            </nav>
            <CardForm cardId={cardId} deckId={deckId} deck={deck}/>
        </div>
     );
}
 
export default EditCard;