import React from "react";
import * as S from "./CheckoutStyles";
import { useCheckout } from "@/context/CheckoutContext";
import { motion, AnimatePresence } from "framer-motion";
import { montserrat } from "@/utils/fontConfig";
import CardCheckout from "@/components/CardCheckout/CardCheckout";

const Checkout = () => {
  const { isOpen, setIsOpen, cart } = useCheckout();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const total = cart.reduce(
    (acc, product) => acc + product.count * product.price,
    0,
  );

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <S.Checkout
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 1, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: "100%" }}
          transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
        >
          <S.Container onClick={(e) => e.stopPropagation()}>
            <S.TitleContainer>
              <h1>Carrinho de compras</h1>
              <button onClick={handleModalClose}>X</button>
            </S.TitleContainer>

            <S.Products>
              {cart.length === 0 && (
                <S.EmptyCart>
                  Seu carrinho está vazio, adicione produtos.
                </S.EmptyCart>
              )}

              <AnimatePresence>
                {cart.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CardCheckout {...product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </S.Products>

            <S.TotalContainer>
              <p>Total</p>
              {cart.length === 0 && <span>R$ 0,00</span>}
              {cart.length > 0 && (
                <motion.span
                  key={total}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -0 }}
                  transition={{ duration: 0.3 }}
                >
                  R${total}
                </motion.span>
              )}
            </S.TotalContainer>

            <S.Button className={montserrat.className}>
              Finalizar compra
            </S.Button>
          </S.Container>
        </S.Checkout>
      )}
    </AnimatePresence>
  );
};

export default Checkout;
