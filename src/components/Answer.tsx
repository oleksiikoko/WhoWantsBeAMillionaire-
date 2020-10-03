import React from "react";

import "../styles/answer.css";

interface AnswerProps {
  letter: string;
  text: string;
  truthy: boolean;
  onClick(): void;
}

const Answer: React.FC<AnswerProps> = (props) => (
  <div className="answer grid-x-end" onClick={props.onClick}>
    <h1>{props.letter.toUpperCase()}</h1>
    <p>{props.text}</p>
  </div>
);

export default Answer;
