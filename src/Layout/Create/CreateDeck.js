import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { createDeck } from "../../utils/api";

const CreateDeck = () => {

    const [deck, setDeck] = useState(
        { name: "",
          description: "" }
          )

    const history = useHistory();

    function nameChangeHandler({target: { value } }) {
      setDeck({...deck, name: value})
    }

    function descriptionChangeHandler({target: { value } }) {
      setDeck({...deck, description: value})
  }


    function submitHandler(event) {
      event.preventDefault();
        createDeck(deck).then((deck) => history.push(`/decks/${deck.id}`))
    }

  
  
    

    return ( 
        <div>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
            <h1>Create Deck</h1>
            <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
    <input 
    type="text" 
    className="form-control" 
    id="name" 
    name="name"
    value={deck.name}
    aria-describedby="emailHelp" 
    placeholder="Deck Name"
    onChange={nameChangeHandler}
    >

    </input>
            <label htmlFor="description">
                Description
            </label>
    <textarea 
    className="form-control" 
    id="description" 
    name="description"
    value={deck.description}
    rows="3" 
    placeholder="Brief description of the deck"
    onChange={descriptionChangeHandler}
    >

    </textarea>
            <Link to="/" type="button" className="btn btn-secondary">Cancel</Link>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
     );
}
 
export default CreateDeck;