import { Link } from "react-router-dom";

const NotEnoughCards = ({ cards, deckInfo}) => {


    return ( 
        <div>
            <h2>Not enough cards.</h2>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck. </p>
            <Link to={`/decks/${deckInfo.id}/cards/new`} type="button" class="btn btn-primary">Add Card</Link>
        </div>
     );
}
 
export default NotEnoughCards;