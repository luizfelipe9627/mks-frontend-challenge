import React from "react";
import * as S from "./MainStyles";

interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
