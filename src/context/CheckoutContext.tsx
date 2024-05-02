"use client";

import React from "react";
interface CheckoutContextData {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cart: Product[];
  setCart: (cart: Product[]) => void;
  handleSetCart: (cart: Product[]) => void;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number, count: number) => void;
  handleRemove: (id: number) => void;
}

const CheckoutContext = React.createContext<CheckoutContextData | null>(null);

export const useCheckout = () => {
  const context = React.useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckout deve estar dentro do CheckoutContextProvider");
  }

  return context;
};

export const CheckoutContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [cart, setCart] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []); // Executa apenas uma vez durante a montagem inicial

  const handleSetCart = (newCart: Product[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleIncrement = (id: number) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      updatedCart[productIndex].count += 1;
      handleSetCart(updatedCart);
    }
  };

  const handleDecrement = (id: number, count: number) => {
    if (count > 1) {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === id,
      );
      if (productIndex !== -1) {
        updatedCart[productIndex].count -= 1;
        handleSetCart(updatedCart);
      }
    }
  };

  const handleRemove = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    handleSetCart(updatedCart);
  };

  return (
    <CheckoutContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cart,
        setCart,
        handleSetCart,
        handleIncrement,
        handleDecrement,
        handleRemove,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
