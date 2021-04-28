import { Link, useHistory } from "react-router-dom";
import { updateDeck } from "../..//utils/api";

const EditForm = ({ deckEdit, setDeckEdit, deckId} ) => {
    
    const history = useHistory();

    function nameChangeHandler({ target: { value }}){
        setDeckEdit({...deckEdit, name: value})
    }

    function descriptionChangeHandler({ target: { value }}){
        setDeckEdit({...deckEdit, description: value})
    }

    function cancelHandler() {
        history.push(`/decks/${deckId}/`);
    }

    function submitHandler(e) {
        async function submit() {
            const newDeck = await updateDeck(deckEdit);
        setDeckEdit(newDeck);
        }
    submit();
    }

   




    return ( 
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
    <input 
    type="text" 
    className="form-control" 
    id="name" 
    name="name"
    value={deckEdit.name}
    aria-describedby="emailHelp" 
    placeholder={deckEdit.name}
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
    value={deckEdit.description}
    rows="3" 
    placeholder={deckEdit.description}
    onChange={descriptionChangeHandler}
    >

    </textarea>
            <button onClick={cancelHandler} type="button" className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
     );
}
 
export default EditForm;