import React from "react";

import Options from "./Options";

import QuestionInterface from "../interfaces/Question";

import MenuSvg from "../assets/svg/menu.svg";

import "../styles/questionsCard.css";

interface QuestionCardProps {
  question: QuestionInterface;
  onAnswer(truthy: boolean): void;
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  return (
    <div className="question-card grid-y-scatter">
      <span onClick={console.log}>
        <MenuSvg />
      </span>
      <h1>{props.question.text}</h1>
      <Options answers={props.question.answers} onChosen={props.onAnswer} />
    </div>
  );
};

export default QuestionCard;
