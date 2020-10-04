import React from "react";

import GameInfoWrapper from "../wrappers/GameInfoWrapper";

import "../styles/startGame.css";

const StartGame = () => {
  return (
    <div className="start-game">
      <GameInfoWrapper
        screenInfo={() => <h1>Who wants to be a millionare?</h1>}
        buttonName="Start"
        onButtonClick={console.log}
      />
    </div>
  );
};

export default StartGame;
