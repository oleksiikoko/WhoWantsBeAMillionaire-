import React from "react";

import Options from "./Options";

import MenuSvg from "../assets/svg/menu.svg";

import "../styles/questionsCard.css";

const QuestionCard = () => {
  return (
    <div className="question-card grid-y-scatter">
      <span onClick={console.log}>
        <MenuSvg />
      </span>
      <h1>
        How old your elder brother was 10 years before you was born, mate?
      </h1>
      <Options />
    </div>
  );
};

export default QuestionCard;
