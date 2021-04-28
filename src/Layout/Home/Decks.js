import { useEffect } from "react";
import { listDecks } from "../../utils/api";
import DeckButtons from "./DeckButtons";


const Decks = ({setDecks, decks}) => {

    useEffect(() => {
        async function getDecks() {
          const decksList = await listDecks();
          setDecks(decksList);
        }
        getDecks();
      }, []);


    return (
        <div>
        {decks.map((deck) => (
            <div className="card" style={{ width: "50rem" }}>
                <div className="row">
                  <div className="col-10">
                    <h5 className="card-title">{deck.name}</h5>
                  </div>
                  <div className="col-2">
                    <p className="card-text text-secondary">
                      {deck.cards.length} cards
                    </p>
                  </div>
                  <div className="container">
                  <p className="card-text">{deck.description}</p>
                  </div>
                </div>
                <DeckButtons deck={deck}/>
          </div>
        ))}
        </div>
      );
}
export default Decks;