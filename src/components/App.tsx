import React from "react";

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

export default function App({ name }: AppProps) {
  return (
    <>
      <div className="game-container">
        {/* <HeaxagonWrappwer
        contentChild={content}
        state={HexagonWrapperState.correct}
        onClick={() => {}}
      />
      <Button name="Button" onClick={() => {}} state={ButtonState.inactive} /> */}
        {/* <StartGame /> */}
        {/* <GameOver /> */}
        {/* <QuestionCard />
        <MenuGame /> */}
        <Game />
      </div>
    </>
  );
}
