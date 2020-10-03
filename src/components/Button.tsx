import React from "react";

import "../styles/button.css";

export enum ButtonState {
  inactive = "inactive",
  pressed = "pressed",
}

interface ButtonProps {
  name: string;
  state: ButtonState;
  onClick(): void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <span
      className={`button button--${props.state} grid-x`}
      onClick={props.onClick}
    >
      <p>{props.name}</p>
    </span>
  );
};

export default Button;
