import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import EditForm from "./EditForm";

const Edit = () => {

const { deckId } = useParams();

const [deckEdit, setDeckEdit] = useState({});

//gets deck data based on deckId parameter

useEffect(() => {
    async function getDeck() {
        const deckToEdit = await readDeck(deckId);
        setDeckEdit(deckToEdit);
    }
    getDeck();
},[deckId])


    return (  
        <div>
            <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}/edit`}>{deckEdit.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit
          </li>
        </ol>
      </nav>
      <EditForm deckEdit={deckEdit} setDeckEdit={setDeckEdit} deckId={deckId}/>
        </div>
    );
}
 
export default Edit;