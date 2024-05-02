import React, { useState } from "react";
import * as S from "./CardCheckoutStyles";
import Image from "next/image";
import { useCheckout } from "@/context/CheckoutContext";
import { montserrat } from "@/utils/fontConfig";
import { motion } from "framer-motion";

const CardCheckout = ({ id, photo, name, price }: Product) => {
  const { cart, handleIncrement, handleDecrement, handleRemove } =
    useCheckout();
  const [animate, setAnimate] = useState("");

  const count = cart.find((product) => product.id === id)?.count || 1;

  const priceTotal = count * price;

  const countIncrement = () => {
    setAnimate("increment");
    handleIncrement(id);
  };

  const countDecrement = () => {
    setAnimate("decrement");
    handleDecrement(id, count);
  };

  const cardRemove = () => {
    handleRemove(id);
  };

  return (
    <S.CardCheckout>
      <S.ImageContainer>
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image src={photo} alt={name} width={50} height={50} priority />
        </motion.div>
        <p>{name}</p>
      </S.ImageContainer>

      <S.ContainerCount>
        <button className={montserrat.className} onClick={countDecrement}>
          -
        </button>
        <motion.span
          key={count}
          initial={
            animate === "increment"
              ? { opacity: 0, y: -20 }
              : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            animate === "increment"
              ? { opacity: 0, y: 20 }
              : { opacity: 0, y: -20 }
          }
        >
          {count}
        </motion.span>
        <button className={montserrat.className} onClick={countIncrement}>
          +
        </button>
      </S.ContainerCount>

      <S.PriceContainer>
        <motion.span
          key={priceTotal}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          R${priceTotal}
        </motion.span>
      </S.PriceContainer>

      <S.Button
        className={montserrat.className}
        onClick={cardRemove}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        exit={{ opacity: 0, y: -20 }}
      >
        X
      </S.Button>
    </S.CardCheckout>
  );
};

export default CardCheckout;
