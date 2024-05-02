import { fireEvent, getByText, render } from "@testing-library/react";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";
import { CheckoutContextProvider } from "@/context/CheckoutContext";
import Checkout from "@/components/Checkout/Checkout";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("ShoppingCart", () => {
  it("Deve renderizar o componente ShoppingCart sem erros", () => {
    render(
      <CheckoutContextProvider>
        <ShoppingCart />
      </CheckoutContextProvider>,
    );
  });

  it("Deve alterar o estado do carrinho ao clicar no ícone container do carrinho", () => {
    const { getByTestId, getByText } = render(
      <CheckoutContextProvider>
        <Checkout />
        <ShoppingCart />
      </CheckoutContextProvider>,
    );

    const shoppingCart = getByTestId("shopping-cart");
    fireEvent.click(shoppingCart);

    expect(getByText("Carrinho de compras")).toBeInTheDocument();
  });
});
