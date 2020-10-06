import React, { useState } from "react";

import HeaxagonWrappwer, { HexagonWrapperState } from "./HexagonWrappwer";
import Button, { ButtonState } from "./Button";
import StartGame from "../pages/StartGame";
import Options from "../components/Options";
import QuestionCard from "../components/QuestionCard";
import MenuGame from "../components/MenuGame";
import GameOver from "../pages/GameOver";
import Game from "../pages/Game";

import "../styles/index.css";

interface AppProps {
  name: string;
}

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

const questions = [
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 500,
  },
  {
    text: "In the UK, the abbreviaftion NHS stands for National what Service?",
    answers: [
      { text: "Humafnity", truthy: false },
      { text: "Hfealth", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 1000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 2000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 4000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 8000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 16000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 32000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 64000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 125000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 250000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 500000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 1000000,
  },
];

enum GamePage {
  start,
  game,
  over,
}

export default function App({ name }: AppProps) {
  const [gameState, setGameState] = useState(GamePage.game);
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
          questions={questions}
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
