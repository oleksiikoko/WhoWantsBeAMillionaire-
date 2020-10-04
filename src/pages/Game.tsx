import React, { useState } from "react";

import QuestionsCard from "../components/QuestionCard";
import MenuGame from "../components/MenuGame";

const questions = [
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 500,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 1000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 2000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 4000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 8000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 16000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 32000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 64000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 125000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 250000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 500000,
  },
  {
    text: "In the UK, the abbreviation NHS stands for National what Service?",
    answers: [
      { text: "Humanity", truthy: false },
      { text: "Health", truthy: true },
      { text: "Honour", truthy: false },
      { text: "Household", truthy: false },
    ],
    price: 1000000,
  },
];

const Game = () => {
  const [curQuestion, setCurQuestion] = useState(0);

  return (
    <div className="game grid-x-center">
      <QuestionsCard question={questions[curQuestion]} />
      <MenuGame />
    </div>
  );
};

export default Game;
