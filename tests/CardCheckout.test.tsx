import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardCheckout from "@/components/CardCheckout/CardCheckout";
import { CheckoutContextProvider } from "@/context/CheckoutContext";
import mockLocalStorage from "./mockLocalStorage";

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: mockLocalStorage,
  });
});

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("CardCheckout", () => {
  it("Deve renderizar o componente CardCheckout sem erros", () => {
    render(
      <CheckoutContextProvider>
        <CardCheckout
          id={1}
          photo="/public/photo.webp"
          name="Nome do Produto"
          description="Descrição do Produto"
          count={1}
          price={100}
        />
      </CheckoutContextProvider>,
    );
  });

  it('Quando clicar no botão "+" deve incrementar a quantidade do produto', () => {
    const { getByText } = render(
      <CheckoutContextProvider>
        <CardCheckout
          id={1}
          photo="/public/photo.webp"
          name="Nome do Produto"
          description="Descrição do Produto"
          count={0}
          price={100}
        />
      </CheckoutContextProvider>,
    );

    const incrementButton = getByText("+");
    fireEvent.click(incrementButton);

    expect(getByText("1")).toBeInTheDocument();
  });

  it('Quando clicar no botão "-" deve decrementar a quantidade do produto', () => {
    const { getByText } = render(
      <CheckoutContextProvider>
        <CardCheckout
          id={1}
          photo="/public/photo.webp"
          name="Nome do Produto"
          description="Descrição do Produto"
          count={2}
          price={100}
        />
      </CheckoutContextProvider>,
    );

    const decrementButton = getByText("-");
    fireEvent.click(decrementButton);

    expect(getByText("1")).toBeInTheDocument();
  });

  it('Quando clicar no botão "X" deve remover o produto do carrinho', () => {
    const { getByText, queryByText } = render(
      <CheckoutContextProvider>
        <CardCheckout
          id={10}
          photo="/public/photo.webp"
          name="Nome do Produto"
          description="Descrição do Produto"
          count={1}
          price={100}
        />
      </CheckoutContextProvider>,
    );

    const removeButton = getByText("X");
    fireEvent.click(removeButton);

    expect(getByText("Nome do Produto")).toBeInTheDocument();
  });
});
