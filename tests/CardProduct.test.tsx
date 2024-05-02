import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CardProduct from "@/components/CardProduct/CardProduct";
import { CheckoutContextProvider } from "@/context/CheckoutContext";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("CardProduct", () => {
  it("Deve renderizar o componente CardProduct sem erros", () => {
    render(
      <CheckoutContextProvider>
        <CardProduct
          id={1}
          count={1}
          name="Nome do produto"
          description="Descrição do produto"
          photo="/caminho/para/a/imagem.jpg"
          price={100}
        />
      </CheckoutContextProvider>,
    );
  });

  it("Deve renderizar o componente com as informações corretas", () => {
    const { getByText } = render(
      <CheckoutContextProvider>
        <CardProduct
          id={1}
          count={1}
          name="Nome do produto"
          description="Descrição do produto"
          photo="/caminho/para/a/imagem.jpg"
          price={100}
        />
      </CheckoutContextProvider>,
    );

    expect(getByText("Nome do produto")).toBeInTheDocument();
    expect(getByText("Descrição do produto")).toBeInTheDocument();
    expect(getByText("R$100")).toBeInTheDocument();
  });

  it("Deve adicionar o produto ao carrinho quando o botão 'Comprar' é clicado", () => {
    const { getByText } = render(
      <CheckoutContextProvider>
        <CardProduct
          id={1}
          count={0}
          name="Nome do produto"
          description="Descrição do produto"
          photo="/caminho/para/a/imagem.jpg"
          price={100}
        />
      </CheckoutContextProvider>,
    );

    const buyButton = getByText("Comprar");
    fireEvent.click(buyButton);

    expect(getByText("Adicionado ao carrinho")).toBeInTheDocument();
  });
});
