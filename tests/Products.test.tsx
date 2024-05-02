import React from "react";
import { render, waitFor } from "@testing-library/react";
import Products from "@/components/Products/Products";
import { CheckoutContextProvider } from "@/context/CheckoutContext";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

jest.mock("react-query");

jest.mock("react-query", () => ({
  useQuery: jest.fn(() => ({
    data: [],
    isLoading: true,
    isError: false,
    error: null,
  })),
}));

describe("Products", () => {
  it("Deve renderizar o componente Products sem erros", () => {
    render(<Products />);
    expect(Products).toBeTruthy();
  });

  it("Deve exibir o Skeleton Card enquanto os dados estão sendo carregados", () => {
    const { getAllByTestId } = render(<Products />);
    const skeletonElements = getAllByTestId("skeleton-loading");

    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it("Deve exibir os produtos corretamente após o carregamento dos dados", () => {
    const mockProducts = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
    ];

    const mockUseQuery = jest.fn(() => ({
      data: mockProducts,
      isLoading: false,
      isError: false,
      error: null,
    }));

    require("react-query").useQuery.mockImplementation(mockUseQuery);

    const { getByText } = render(
      <CheckoutContextProvider>
        <Products />
      </CheckoutContextProvider>,
    );

    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByText("Product 2")).toBeInTheDocument();
  });

  it("Deve exibir a mensagem de erro correta se ocorrer um erro ao buscar os dados", () => {
    const mockError = new Error();

    const mockUseQuery = jest.fn(() => ({
      data: [],
      isLoading: false,
      isError: true,
      error: mockError,
    }));

    require("react-query").useQuery.mockImplementation(mockUseQuery);

    const { getByText } = render(
      <CheckoutContextProvider>
        <Products />
      </CheckoutContextProvider>,
    );

    expect(
      getByText(`Ocorreu um erro: ${mockError.message}.`),
    ).toBeInTheDocument();
  });

  it("Deve exibir a mensagem de erro correta se não houver produtos", () => {
    const mockUseQuery = jest.fn(() => ({
      data: null,
      isLoading: false,
      isError: false,
      error: null,
    }));

    require("react-query").useQuery.mockImplementation(mockUseQuery);

    const { getByText } = render(
      <CheckoutContextProvider>
        <Products />
      </CheckoutContextProvider>,
    );

    expect(getByText("Nenhum produto encontrado.")).toBeInTheDocument();
  });
});
