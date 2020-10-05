import React, { useRef } from "react";

import HexagonWrapper, { HexagonWrapperState } from "./HexagonWrappwer";

import numberWithCommas from "../utils/numberWithCommas";

import CloseSvg from "../assets/svg/close.svg";

import "../styles/menuGame.css";

interface MenyGameProps {
  menuState: Array<{
    value: number;
    state: HexagonWrapperState;
  }>;
}

const MenuGame: React.FC<MenyGameProps> = (props) => {
  const menuRef = useRef(null);
  const onClose = () => {
    document.getElementById("menu-game")!.classList.add("menu-game--hide");
    document.getElementById("menu-game")!.classList.remove("menu-game--show");

    document
      .getElementById("question-card")!
      .classList.add("question-card--show");
    document
      .getElementById("question-card")!
      .classList.remove("question-card--hide");
  };

  return (
    <div id="menu-game" className="menu-game--hide">
      <div ref={menuRef} className="menu-game grid-y-center">
        <span onClick={onClose}>
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
    </div>
  );
};

export default MenuGame;
