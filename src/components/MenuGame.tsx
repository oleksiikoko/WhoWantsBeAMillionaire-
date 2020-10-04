import React from "react";

import HexagonWrapper, { HexagonWrapperState } from "./HexagonWrappwer";

import CloseSvg from "../assets/svg/close.svg";

import "../styles/menuGame.css";

enum MenuItemState {
  comleted,
  active,
  uncompleted,
}

const menuState = [
  { value: "$10000000", state: MenuItemState.comleted },
  { value: "$10000000", state: MenuItemState.comleted },
  { value: "$10000000", state: MenuItemState.comleted },
  { value: "$10000000", state: MenuItemState.comleted },
  { value: "$10000000", state: MenuItemState.active },
  { value: "$10000000", state: MenuItemState.uncompleted },
  { value: "$10000000", state: MenuItemState.uncompleted },
  { value: "$10000000", state: MenuItemState.uncompleted },
  { value: "$10000000", state: MenuItemState.uncompleted },
  { value: "$10000000", state: MenuItemState.uncompleted },
  { value: "$10000000", state: MenuItemState.uncompleted },
  { value: "$10000000", state: MenuItemState.uncompleted },
];

const MenuGame = () => {
  return (
    <div className="menu-game grid-y-center">
      <span onClick={console.log}>
        <CloseSvg />
      </span>
      <ul className="menu-game__content">
        {menuState.map((item) => {
          return (
            <li>
              <HexagonWrapper
                contentChild={() => <>{item.value}</>}
                state={HexagonWrapperState.inactive}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuGame;
