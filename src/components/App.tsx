import React from "react";

import HeaxagonWrappwer, { HexagonWrapperState } from "./HeaxagonWrappwer";
import Button, { ButtonState } from "./Button";

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
      <HeaxagonWrappwer
        contentChild={content}
        state={HexagonWrapperState.correct}
        onClick={() => {}}
      />
      <Button name="Button" onClick={() => {}} state={ButtonState.inactive} />
    </>
  );
}
