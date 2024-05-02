import React from "react";
import Image from "next/image";
import shoppingBag from "@/assets/shopping-bag.svg";
import * as S from "./CardProductStyles";
import { montserrat } from "@/utils/fontConfig";
import { useCheckout } from "@/context/CheckoutContext";
import { AnimatePresence, motion } from "framer-motion";
import Check from "@/assets/check.svg";
import { count } from "console";

const CardProduct = ({ id, name, description, photo, price }: Product) => {
  const { cart, handleSetCart } = useCheckout();
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);

  const priceString = price.toString();
  const priceFormatted = priceString.replace(/[,.]\d+/g, "");

  const handleAddToCart = ({
    id,
    name,
    description,
    photo,
    price,
  }: Product) => {
    const existingProductIndex = cart.findIndex(
      (product) => product.name === name,
    );

    if (existingProductIndex !== -1) {
      const newCart = cart.map((product, index) => {
        if (index === existingProductIndex) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      handleSetCart(newCart);
    } else {
      const newCart = [
        ...cart,
        { id, name, description, photo, price, count: 1 },
      ];
      handleSetCart(newCart);
    }

    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  return (
    <S.CardProduct>
      <S.ImageContainer whileHover={{ scale: 1.1 }}>
        <Image src={photo} alt={name} width={500} height={200} priority />
      </S.ImageContainer>

      <S.Container>
        <S.TitleContainer>
          <S.Title>{name}</S.Title>
          <S.Price>R${priceFormatted}</S.Price>
        </S.TitleContainer>

        <S.Description>{description}</S.Description>

        <S.Button
          whileHover={{
            backgroundColor: isAddedToCart
              ? "#4CAF50"
              : "rgba(15, 82, 186, 0.8)",
          }}
          className={montserrat.className}
          onClick={() =>
            handleAddToCart({ id, name, description, photo, price, count: 1 })
          }
          animate={{
            backgroundColor: isAddedToCart ? "#4CAF50" : "#0f52ba",
          }}
        >
          {!isAddedToCart && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Image src={shoppingBag} alt="Shopping bag" />
                <p>Comprar</p>
              </motion.div>
            </AnimatePresence>
          )}

          {isAddedToCart && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Image src={Check} alt="Check" />
                <p>Adicionado</p>
              </motion.div>
            </AnimatePresence>
          )}
        </S.Button>
      </S.Container>
    </S.CardProduct>
  );
};

export default CardProduct;
