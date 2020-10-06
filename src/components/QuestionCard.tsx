import React, { useEffect } from "react";

import Options from "./Options";

import QuestionInterface from "../interfaces/Question";

import MenuSvg from "../assets/svg/menu.svg";

import "../styles/questionsCard.css";

interface QuestionCardProps {
  question: QuestionInterface;
  onAnswer(truthy: boolean): void;
  block: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const onShowMenu = () => {
    document.getElementById("menu-game")!.classList.add("menu-game--show");
    document.getElementById("menu-game")!.classList.remove("menu-game--hide");

    document
      .getElementById("question-card")!
      .classList.add("question-card--hide");
    document
      .getElementById("question-card")!
      .classList.remove("question-card--show");
  };
  return (
    <div id="question-card">
      <div className="question-card  grid-y-center">
        <span onClick={onShowMenu}>
          <MenuSvg />
        </span>
        <h1>{props.question.text}</h1>
        <Options
          answers={props.question.answers}
          onChosen={props.onAnswer}
          block={props.block}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
