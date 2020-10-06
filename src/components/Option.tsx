import React from "react";

import HexagonWrapper, { HexagonWrapperState } from "./HexagonWrappwer";
import Answer from "./Answer";

interface OptionProps {
  letter: string;
  text: string;
  truthy: boolean;
  onClick(truthy: boolean): void;
  state: HexagonWrapperState;
}

const Option: React.FC<OptionProps> = (props) => {
  return (
    <HexagonWrapper
      state={props.state}
      contentChild={() => <Answer letter={props.letter} text={props.text} />}
      onClick={() => props.onClick && props.onClick(props.truthy)}
    />
  );
};

export default Option;
