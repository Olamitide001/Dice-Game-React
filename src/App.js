import Player1 from "./Player1";
import Player2 from "./Player2";
import Buttons from "./Buttons";
import React, { useState } from "react";

function App() {
  const [randomDice, setRandomDice] = useState(0);

  const [CurrentScore, setCurrentScore] = useState([0, 0]);

  const [currPlayer, SetCurrPlayer] = useState(0);

  const [score0, SetScore0] = useState(0);

  const [score1, SetScore1] = useState(0);

  const handleRollDice = () => {
    if (score0 < 20 && score1 < 20) {
      setRandomDice((currNumber) => Math.trunc(Math.random() * 6) + 1);

      if (randomDice !== 1) {
        setCurrentScore((currScore) => currScore);
      } else {
        SetCurrPlayer((curr) => (curr === 0 ? 1 : 0));
      }
    }
  };

  const handleHold = () => {
    if (score0 < 20 && score1 < 20) {
      if (currPlayer === 0 && randomDice > 1) {
        SetScore0((total) => total + CurrentScore[0]);
        SetCurrPlayer((curr) => (curr === 0 ? 1 : 0));
        setRandomDice(0);
      } else {
        SetScore1((total) => total + CurrentScore[1]);
        SetCurrPlayer((curr) => (curr === 0 ? 1 : 0));
        setRandomDice(0);
      }
    }
  };
  const handleNew = () => {
    SetScore0(0);
    SetScore1(0);
    setCurrentScore([0, 0]);
    setRandomDice(0);
    SetCurrPlayer(0);
  };
  return (
    <main>
      <Player1
        randomDiceNumber={randomDice}
        playerCurrentScore={CurrentScore}
        playerCurrent={currPlayer}
        playerScore={score0}
      />
      <Player2
        randomDiceNumber={randomDice}
        playerCurrentScore={CurrentScore}
        playerCurrent={currPlayer}
        playerScore={score1}
      />
      <Buttons
        randomDiceNumber={randomDice}
        onHandleRollDice={handleRollDice}
        onHandleHold={handleHold}
        onHandleNew={handleNew}
      />
    </main>
  );
}

export default App;
