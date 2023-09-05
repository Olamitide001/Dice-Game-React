const Player2 = ({
  randomDiceNumber,
  playerCurrentScore,
  playerCurrent,
  playerScore,
}) => {
  const subScore = (curr) => {
    if (playerCurrent === 1 && randomDiceNumber !== 1) {
      return (playerCurrentScore[1] = curr + randomDiceNumber / 2);
    } else {
      return (playerCurrentScore[1] = 0);
    }
  };

  return (
    <section
      className={`player player--1 ${
        playerCurrent === 1 ? "player--active" : ""
      } ${playerScore >= 20 ? "player--winner" : ""} `}
    >
      <h2 className="name" id="name--1">
        Player 2
      </h2>
      <p className="score" id="score--1">
        {playerScore}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--1">
          {subScore(playerCurrentScore[1])}
        </p>
      </div>
    </section>
  );
};

export default Player2;
