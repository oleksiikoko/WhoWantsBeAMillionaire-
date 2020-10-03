import React from "react";

import HeaxagonWrappwer, { HexagonWrapperState } from "./HexagonWrappwer";
import Button, { ButtonState } from "./Button";
import StartGame from "../pages/StartGame";
import Options from "../components/Options";

import "../styles/index.css";

interface AppProps {
  name: string;
}

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

const content = () => <div>falsdkjfa</div>;

export default function App({ name }: AppProps) {
  return (
    <>
      {/* <HeaxagonWrappwer
        contentChild={content}
        state={HexagonWrapperState.correct}
        onClick={() => {}}
      />
      <Button name="Button" onClick={() => {}} state={ButtonState.inactive} /> */}
      {/* <StartGame /> */}
      <Options />
    </>
  );
}
