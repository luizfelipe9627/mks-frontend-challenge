import React from "react";
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Checkout from "@/components/Checkout/Checkout";
import { CheckoutContextProvider } from "@/context/CheckoutContext";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("Checkout", () => {
  it("Deve renderizar o componente Checkout sem erros quando clicado no carrinho", () => {
    const { getByAltText, getByText } = render(
      <CheckoutContextProvider>
        <ShoppingCart />
        <Checkout />
      </CheckoutContextProvider>,
    );

    fireEvent.click(getByAltText("Shopping cart"));

    expect(getByText("Carrinho de compras")).toBeInTheDocument();
  });

  it("Deve renderizar o Checkout caso o carrinho esteja vazio", () => {
    const { getByText, getByAltText } = render(
      <CheckoutContextProvider>
        <ShoppingCart />
        <Checkout />
      </CheckoutContextProvider>,
    );

    fireEvent.click(getByAltText("Shopping cart"));

    expect(
      getByText("Seu carrinho está vazio, adicione produtos."),
    ).toBeInTheDocument();
  });

  it("Deve fechar o carrinho ao clicar no botão 'X'", async () => {
    const { getByText, getByAltText, queryByText } = render(
      <CheckoutContextProvider>
        <ShoppingCart />
        <Checkout />
      </CheckoutContextProvider>,
    );

    fireEvent.click(getByAltText("Shopping cart"));

    const closeButton = getByText("X");
    fireEvent.click(closeButton);

    await waitForElementToBeRemoved(() => getByText("Carrinho de compras"));
  });

  it("Deve calcular o total do carrinho corretamente", async () => {
    const mockCart = [
      { id: 1, name: "Product 1", price: 30, count: 2 },
      { id: 2, name: "Product 2", price: 20, count: 1 },
    ];

    jest.spyOn(React, "useContext").mockReturnValueOnce({
      isOpen: true,
      setIsOpen: jest.fn(),
      cart: mockCart,
    } as any);

    const { getByText } = render(
      <CheckoutContextProvider>
        <Checkout />
      </CheckoutContextProvider>,
    );

    // Calcule o total esperado com base nos dados simulados
    const expectedTotal = mockCart.reduce(
      (acc, product) => acc + product.count * product.price,
      0,
    );

    // Verifique se o total exibido no componente corresponde ao total esperado
    await waitFor(() => {
      expect(getByText(`R$${expectedTotal}`)).toBeInTheDocument();
    });
  });
});
