import React from "react";

import HexagonWrapper, { HexagonWrapperState } from "./HexagonWrappwer";

import numberWithCommas from "../utils/numberWithCommas";

import CloseSvg from "../assets/svg/close.svg";

import "../styles/menuGame.css";

enum MenuItemState {
  comleted,
  active,
  uncompleted,
}

interface MenyGameProps {
  menuState: Array<{
    value: number;
    state: HexagonWrapperState;
  }>;
}

const MenuGame: React.FC<MenyGameProps> = (props) => {
  return (
    <div className="menu-game grid-y-center">
      <span onClick={console.log}>
        <CloseSvg />
      </span>
      <ul className="menu-game__content">
        {props.menuState.reverse().map((item, index) => {
          return (
            <li key={index}>
              <HexagonWrapper
                contentChild={() => <p>${numberWithCommas(item.value)}</p>}
                state={item.state}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuGame;
