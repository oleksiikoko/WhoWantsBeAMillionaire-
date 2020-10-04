import React from "react";

import Options from "./Options";

import MenuSvg from "../assets/svg/menu.svg";

import "../styles/questionsCard.css";

interface QuestionCardProps {
  question: {
    text: string;
    answers: Array<{
      text: string;
      truthy: boolean;
    }>;
    price: number;
  };
}

const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  return (
    <div className="question-card grid-y-scatter">
      <span onClick={console.log}>
        <MenuSvg />
      </span>
      <h1>{props.question.text}</h1>
      <Options />
    </div>
  );
};

export default QuestionCard;
