import React from "react";

import HexagonWrapper, { HexagonWrapperState } from "./HexagonWrappwer";
import Answer from "./Answer";

import "../styles/options.css";

interface OptionsProps {
  questions?: [string];
}

const answers = [
  { text: "text", truty: false },
  { text: "text", truty: false },
  { text: "text", truty: false },
  { text: "text", truty: false },
];

const Options: React.FC<OptionsProps> = (props) => {
  return (
    <div className="options">
      {answers.map((item) => {
        return (
          <HexagonWrapper
            state={HexagonWrapperState.inactive}
            contentChild={() => (
              <Answer
                letter="A"
                text="Qudsfa;"
                truthy={false}
                onClick={console.log}
              />
            )}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default Options;
