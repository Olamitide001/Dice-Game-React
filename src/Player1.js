const Player1 = ({
  randomDiceNumber,
  playerCurrentScore,
  playerCurrent,
  playerScore,
}) => {
  //  console.log(playerCurrent);
  const subScore = (curr) => {
    if (playerCurrent === 0 && randomDiceNumber !== 1) {
      return (playerCurrentScore[0] += randomDiceNumber / 2);
    } else {
      return (playerCurrentScore[0] = 0);
    }
  };

  return (
    <section
      className={`player player--0 ${
        playerCurrent === 0 ? "player--active" : ""
      } ${playerScore >= 20 ? "player--winner" : ""} `}
    >
      <h2 className="name" id="name--0">
        Player 1
      </h2>
      <p className="score" id="score--0">
        {playerScore}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--0">
          {subScore(playerCurrentScore[0])}
        </p>
      </div>
    </section>
  );
};

export default Player1;
