const CardBack = ({ cards }) => {
  return (
    <div className="card" style="width: 18rem;">
      <div className="card-body">
        <p className="card-text">{cards[0].back}</p>
      </div>
    </div>
  );
};

export default CardBack;
