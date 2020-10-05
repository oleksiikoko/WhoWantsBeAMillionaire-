import React from "react";

import GameInfoWrapper from "../containers/GameInfoWrapper";

import numberWithCommas from "../utils/numberWithCommas";

import "../styles/gameOver.css";

interface GameScoreProps {
  total: number;
}

const GameScore: React.FC<GameScoreProps> = (props) => {
  return (
    <div className="game-over__score">
      <p>Total score:</p>
      <h1>${numberWithCommas(props.total)} earned</h1>
    </div>
  );
};

interface GameOverProps {
  score: number;
  onStartGame(): void;
}

const GameOver: React.FC<GameOverProps> = (props) => {
  return (
    <div className="game-over">
      <GameInfoWrapper
        screenInfo={() => <GameScore total={props.score} />}
        buttonName="Try again"
        onButtonClick={props.onStartGame}
      />
    </div>
  );
};

export default GameOver;
