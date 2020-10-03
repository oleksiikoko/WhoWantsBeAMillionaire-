import React from "react";

import Button, { ButtonState } from "../components/Button";

import HandSvg from "../assets/svg/hand.svg";
import StarsSvg from "../assets/svg/stars.svg";

import "../styles/startGame.css";

const StartGame = () => {
  return (
    <div className="start-game grid-x-center">
      <section className="hand grid-y-center">
        <StarsSvg />
        <HandSvg />
      </section>
      <section className="grid-y-start">
        <h1>Who wants to be a millionare?</h1>
        <Button name="Start" onClick={() => {}} state={ButtonState.inactive} />
      </section>
    </div>
  );
};

export default StartGame;
