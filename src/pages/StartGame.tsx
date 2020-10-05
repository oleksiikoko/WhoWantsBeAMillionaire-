import React from "react";

import GameInfoWrapper from "../wrappers/GameInfoWrapper";

import "../styles/startGame.css";

interface StartGameProps {
  onStart(): void;
}

const StartGame: React.FC<StartGameProps> = (props) => {
  return (
    <div className="start-game">
      <GameInfoWrapper
        screenInfo={() => <h1>Who wants to be a millionare?</h1>}
        buttonName="Start"
        onButtonClick={props.onStart}
      />
    </div>
  );
};

export default StartGame;
