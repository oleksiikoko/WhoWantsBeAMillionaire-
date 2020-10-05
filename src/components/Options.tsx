import React, { useState, useEffect } from "react";

import AnswerInterface from "../interfaces/Answer";
import { HexagonWrapperState } from "./HexagonWrappwer";
import Option from "./Option";

import "../styles/options.css";

interface OptionsProps {
  answers: Array<AnswerInterface>;
  onChosen(truthy: boolean): void;
}

const Options: React.FC<OptionsProps> = (props) => {
  const cleanState = () =>
    Array(props.answers.length).fill(HexagonWrapperState.inactive);

  const [optionsState, setOptionsState] = useState(cleanState());

  const onOptionsChosen = (index: number) => {
    if (
      optionsState.filter((state) => state === HexagonWrapperState.inactive)
        .length === props.answers.length
    ) {
      return () => {
        let sliceState = optionsState.slice();
        sliceState.splice(index, 1, HexagonWrapperState.selected);

        setOptionsState(
          sliceState.map((item) => {
            if (item === HexagonWrapperState.inactive)
              return HexagonWrapperState.disabled;
            return item;
          })
        );
      };
    }
  };

  const changeSelectedIfExist = () => {
    const index = optionsState.indexOf(HexagonWrapperState.selected);

    if (index !== -1) {
      let tempState = optionsState.slice();
      setTimeout(() => {
        tempState.splice(
          index,
          1,
          props.answers[index].truthy
            ? HexagonWrapperState.correct
            : HexagonWrapperState.wrong
        );
        setOptionsState(tempState);
        props.onChosen(props.answers[index].truthy);
      }, 1000);
    }
  };

  useEffect(() => {
    changeSelectedIfExist();
  });
  useEffect(() => {
    setOptionsState(cleanState());
  }, [props.answers]);

  return (
    <div className="options">
      {props.answers.map((item, index) => {
        return (
          <Option
            key={index}
            letter={String.fromCharCode(65 + index)}
            text={item.text}
            truthy={item.truthy}
            onClick={onOptionsChosen(index)}
            state={optionsState[index]}
          />
        );
      })}
    </div>
  );
};

export default Options;
