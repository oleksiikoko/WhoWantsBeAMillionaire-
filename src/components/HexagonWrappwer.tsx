import React from "react";

import "../styles/hexagon.css";

import HexagonSvg from "../assets/svg/hexagon.svg";
import LineSvg from "../assets/svg/line.svg";

export enum HexagonWrapperState {
  inactive = "inactive",
  selected = "selected",
  correct = "correct",
  wrong = "wrong",
}

interface HexagonWrapperProps {
  contentChild: React.FunctionComponent;
  state: HexagonWrapperState;
  onClick(): void;
}

const HexagonWrapper: React.FC<HexagonWrapperProps> = (props) => {
  return (
    <span
      className={`hexagon--${props.state} hexagon grid-x-center`}
      onClick={props.onClick}
    >
      <LineSvg />
      <HexagonSvg />
      <LineSvg />
      <div className="hexagon__content">
        <props.contentChild />
      </div>
    </span>
  );
};

export default HexagonWrapper;
