import React from "react";
import Logo from "@/components/Logo/Logo";
import * as S from "./HeaderStyles";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <ShoppingCart />
      </S.Container>
    </S.Header>
  );
};

export default Header;
