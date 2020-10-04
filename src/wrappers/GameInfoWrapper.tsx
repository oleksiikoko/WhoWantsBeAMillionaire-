import React from "react";

import Button, { ButtonState } from "../components/Button";

import HandSvg from "../assets/svg/hand.svg";
import StarsSvg from "../assets/svg/stars.svg";

import "../styles/gameInfoWrapper.css";

interface GameInfoWrapperProps {
  screenInfo: React.FunctionComponent;
  buttonName: string;
  onButtonClick(): void;
}

const GameInfoWrapper: React.FC<GameInfoWrapperProps> = (props) => {
  return (
    <div className="game-info grid-x-center">
      <section className="hand grid-y-center">
        <StarsSvg />
        <HandSvg />
      </section>
      <section className="grid-y-start">
        <props.screenInfo />
        <Button
          name={props.buttonName}
          onClick={props.onButtonClick}
          state={ButtonState.inactive}
        />
      </section>
    </div>
  );
};

export default GameInfoWrapper;
