import { Link} from "react-router-dom";
import { deleteDeck } from "../../utils/api";



const DeckButtons = ({deck}) => {


  async function deleteHandler() {
    const deckDelete= window.confirm("Delete this deck? You will not be able to recover it.")
    if (deckDelete) {
      await deleteDeck(deck.id);
      window.location.reload();
    }
  }


    return (
        <div className="row">
        <div className="col align-left">
          <Link to={`decks/${deck.id}/edit`} type="button" className="btn btn-secondary">
            View
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
          <button type="button" className="btn btn-primary">
          Study
          </button>
          </Link>
          </div>
        <div className="col align-right">
          <button onClick={deleteHandler} type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      );
}
 
export default DeckButtons;