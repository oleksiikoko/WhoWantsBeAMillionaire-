import React, { useState, useEffect } from "react";

import HexagonWrapper, {
  HexagonWrapperState,
} from "../components/HexagonWrappwer";

import QuestionsCard from "../components/QuestionCard";
import MenuGame from "../components/MenuGame";

import QuestionInterface from "../interfaces/Question";

import "../styles/game.css";

interface GameProps {
  questions: Array<QuestionInterface>;
  updateScore(concatValue: number): void;
  onGameOver(): void;
}

const Game: React.FC<GameProps> = (props) => {
  const [curQuestion, setCurQuestion] = useState(props.questions[0]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  console.log(correctAnswers);
  const getCountCorrectAnswers = () => {
    return curQuestion.answers.filter((item) => item.truthy === true).length;
  };
  console.log(getCountCorrectAnswers());
  const [block, setBlock] = useState(false);

  const answerHandler = (truthy: boolean) => {
    if (correctAnswers === getCountCorrectAnswers()) setBlock(true);
    setTimeout(() => {
      if (truthy) {
        if (getCountCorrectAnswers() === correctAnswers + 1) {
          props.updateScore(curQuestion.price);
          setCurQuestion(
            props.questions[props.questions.indexOf(curQuestion) + 1]
          );
          setCorrectAnswers(0);
        } else {
          setCorrectAnswers(correctAnswers + 1);
        }
      } else {
        props.onGameOver();
      }
    }, 1000);
  };

  const menuStateNormalizer = () => {
    return props.questions.map((item, index) => {
      let state;
      const questionIndex = props.questions.indexOf(curQuestion);
      if (index < questionIndex) {
        state = HexagonWrapperState.completed;
      } else if (index > questionIndex) {
        state = HexagonWrapperState.uncompleted;
      } else {
        state = HexagonWrapperState.current;
      }
      return { value: item.price, state: state };
    });
  };

  return (
    <div className="game grid-x-center">
      <QuestionsCard
        question={curQuestion}
        onAnswer={answerHandler}
        block={block}
      />
      <MenuGame menuState={menuStateNormalizer()} />
    </div>
  );
};

export default Game;
