import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import CardForm from "./CardForm";

const AddCard = () => {

    const { deckId } = useParams();

    const [deck, setDeck] = useState({})

    useEffect(() => {
        async function getDeck() {
            const deckRead = await readDeck(deckId);
            setDeck(deckRead);
        }
        getDeck();
    }, [])



    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>

            <h1>{deck.name}: Add Card</h1>
            <CardForm deckId={deckId} deck={deck}/>
        </div>
     );
}

export default AddCard;