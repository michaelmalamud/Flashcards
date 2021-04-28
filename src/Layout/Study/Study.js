import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck, listCards } from "../../utils/api";
import Cards from "./Cards";
import NotEnoughCards from "./NotEnoughCards";

const Study = () => {
  const [deckInfo, setDeckInfo] = useState({cards: []});

  const { deckId } = useParams();

  useEffect(() => {
    async function getInfo() {
      const info = await readDeck(deckId);
      setDeckInfo(info);
    }
    getInfo();
  }, []);

 


  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}/study`}>{deckInfo.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>Study: {deckInfo.name}</h1>
       <Cards deckId={deckId} deckInfo={deckInfo}/>
    </div>
  );
};

export default Study;
