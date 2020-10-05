import React from "react";

import "../styles/answer.css";

interface AnswerProps {
  letter: string;
  text: string;
}

const Answer: React.FC<AnswerProps> = (props) => (
  <div className="answer grid-x-end">
    <h1>{props.letter.toUpperCase()}</h1>
    <p>{props.text}</p>
  </div>
);

export default Answer;
