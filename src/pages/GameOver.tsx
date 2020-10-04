import React from "react";

import GameInfoWrapper from "../wrappers/GameInfoWrapper";

import "../styles/gameOver.css";

const GameScore = () => {
  return (
    <div className="game-over__score">
      <p>Total score:</p>
      <h1>$8,000 earned</h1>
    </div>
  );
};

const GameOver = () => {
  return (
    <div className="game-over">
      <GameInfoWrapper
        screenInfo={() => <GameScore />}
        buttonName="Try again"
        onButtonClick={console.log}
      />
    </div>
  );
};

export default GameOver;
