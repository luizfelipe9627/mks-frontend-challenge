import React from "react";
import { render } from "@testing-library/react";
import Header from "@/components/Header/Header";
import { CheckoutContextProvider } from "@/context/CheckoutContext";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("Header", () => {
  it("Deve renderizar o componente Header sem erros", () => {
    render(
      <CheckoutContextProvider>
        <Header />
      </CheckoutContextProvider>,
    );
  });
});
