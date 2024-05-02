import React, { useContext } from "react";
import shoppingCart from "@/assets/shooping-cart.svg";
import Image from "next/image";
import * as S from "./ShoppingCartStyles";
import { montserrat } from "@/utils/fontConfig";
import { useCheckout } from "@/context/CheckoutContext";

const ShoppingCart = () => {
  const { setIsOpen, cart } = useCheckout();

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  return (
    <S.ShoppingCart data-testid="shopping-cart" onClick={handleOpenCart}>
      <Image src={shoppingCart} alt="Shopping cart" />
      <S.Count className={montserrat.className}>{cart.length}</S.Count>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
