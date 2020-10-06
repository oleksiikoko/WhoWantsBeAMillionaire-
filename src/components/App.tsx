import React, { useState } from "react";

import StartGame from "../pages/StartGame";
import GameOver from "../pages/GameOver";
import Game from "../pages/Game";

import game from "../assets/configs/game.json";

import "../styles/index.css";

interface AppProps {
  name: string;
}

enum GamePage {
  start,
  game,
  over,
}

export default function App({ name }: AppProps) {
  const [gameState, setGameState] = useState(GamePage.start);
  const [gameScore, setGameScore] = useState(0);

  const startGame = () => {
    setGameState(GamePage.game);
  };

  const updateScore = (concatValue: number) => {
    setGameScore(gameScore + concatValue);
  };

  const gameOver = () => {
    setGameState(GamePage.over);
  };

  return (
    <div className="game-container">
      {gameState === GamePage.start && <StartGame onStart={startGame} />}
      {gameState === GamePage.game && (
        <Game
          questions={game.questions}
          updateScore={updateScore}
          onGameOver={gameOver}
        />
      )}
      {gameState === GamePage.over && (
        <GameOver score={gameScore} onStartGame={startGame} />
      )}
    </div>
  );
}
