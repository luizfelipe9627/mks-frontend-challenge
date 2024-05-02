import React from "react";
import { render } from "@testing-library/react";
import Logo from "@/components/Logo/Logo";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("Logo", () => {
  it("Deve renderizar o componente Logo sem erros", () => {
    render(<Logo />);
  });
});
