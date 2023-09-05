const Buttons = ({
  randomDiceNumber,
  onHandleRollDice,
  onHandleHold,
  onHandleNew,
}) => {
  return (
    <div>
      {randomDiceNumber >= 1 && (
        <img
          src={`.//dice-${randomDiceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={onHandleNew}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={onHandleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={onHandleHold}>
        📥 Hold
      </button>
    </div>
  );
};

export default Buttons;
